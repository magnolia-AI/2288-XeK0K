'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useTransition } from 'react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    params.delete('page');

    startTransition(() => {
      const newUrl = `/products?${params.toString()}`;
      router.push(newUrl);
    });
  };

  const handlePriceChange = (key: 'minPrice' | 'maxPrice', value: string) => {
    updateFilters({ [key]: value });
  };

  return (
    <div className="space-y-8 h-full">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2">
          Genetic Lineage
        </h3>
        <Select
          defaultValue={searchParams.get('category') || 'all'}
          onValueChange={(value) => updateFilters({ category: value === 'all' ? null : value })}
        >
          <SelectTrigger id="category" className="bg-muted/30 border-primary/10">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Full Catalog</SelectItem>
            <SelectItem value="Standard T-Rex">Standard T-Rex</SelectItem>
            <SelectItem value="Rare Variants">Rare Variants</SelectItem>
            <SelectItem value="Specialized">Specialized</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="bg-primary/5" />

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Cost Range</h3>
        <div className="flex gap-2 items-center">
          <div className="flex-1">
            <Label htmlFor="minPrice" className="sr-only">Min Cost</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="Min"
              defaultValue={searchParams.get('minPrice') || ''}
              onBlur={(e) => handlePriceChange('minPrice', e.target.value)}
              className="bg-muted/30 border-primary/10 text-xs"
            />
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="flex-1">
            <Label htmlFor="maxPrice" className="sr-only">Max Cost</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="Max"
              defaultValue={searchParams.get('maxPrice') || ''}
              onBlur={(e) => handlePriceChange('maxPrice', e.target.value)}
              className="bg-muted/30 border-primary/10 text-xs"
            />
          </div>
        </div>
      </div>

      {isPending && (
        <div className="text-xs font-medium text-primary animate-pulse flex items-center gap-2">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          Updating DNA...
        </div>
      )}
    </div>
  );
}

export function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Select
      defaultValue={searchParams.get('sort') || 'newest'}
      onValueChange={handleSortChange}
    >
      <SelectTrigger className="w-[180px] bg-muted/30 border-primary/10">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest Arrival</SelectItem>
        <SelectItem value="price-low">Cost: Low to High</SelectItem>
        <SelectItem value="price-high">Cost: High to Low</SelectItem>
        <SelectItem value="name">Alphabetical</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTimeoutRef = React.useRef<any>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    
    searchTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value) params.set('q', value);
      else params.delete('q');
      router.push(`/products?${params.toString()}`);
    }, 400);
  };

  return (
    <div className="relative flex-1">
      <Input
        placeholder="Filter by keyword or lab origin..."
        defaultValue={searchParams.get('q') || ''}
        onChange={handleSearchChange}
        className="bg-muted/30 border-primary/10 pl-10 h-11"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
    </div>
  );
}

