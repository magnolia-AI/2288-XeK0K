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
    
    // Reset to page 1 when filters change
    params.delete('page');

    startTransition(() => {
      const newUrl = `/products?${params.toString()}`;
      router.push(newUrl);
    });
  };

  const searchTimeoutRef = React.useRef<any>(null);
  const priceTimeoutRef = React.useRef<any>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    
    searchTimeoutRef.current = setTimeout(() => {
      updateFilters({ q: value });
    }, 400);
  };

  const handlePriceChange = (key: 'minPrice' | 'maxPrice', value: string) => {
    if (priceTimeoutRef.current) clearTimeout(priceTimeoutRef.current);

    priceTimeoutRef.current = setTimeout(() => {
      updateFilters({ [key]: value });
    }, 500);
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Label htmlFor="search" className="sr-only">Search</Label>
          <Input
            id="search"
            placeholder="Search our labs..."
            defaultValue={searchParams.get('q') || ''}
            onChange={handleSearchChange}
            className="w-full bg-muted/30 border-primary/10"
          />
        </div>
        <div className="w-full md:w-[220px]">
          <Select
            defaultValue={searchParams.get('sort') || 'newest'}
            onValueChange={(value) => updateFilters({ sort: value })}
          >
            <SelectTrigger aria-label="Sort by" className="bg-muted/30 border-primary/10">
              <SelectValue placeholder="Sort Catalog" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest Specimens</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-[220px]">
          <Label htmlFor="category" className="text-xs font-bold uppercase tracking-widest mb-2 block text-muted-foreground">Genetic Lineage</Label>
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

        <div className="flex gap-2 items-end flex-grow md:flex-grow-0">
          <div className="w-28">
            <Label htmlFor="minPrice" className="text-xs font-bold uppercase tracking-widest mb-2 block text-muted-foreground">Min Cost</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="$0"
              defaultValue={searchParams.get('minPrice') || ''}
              onChange={(e) => handlePriceChange('minPrice', e.target.value)}
              className="bg-muted/30 border-primary/10 text-xs"
            />
          </div>
          <div className="w-28">
            <Label htmlFor="maxPrice" className="text-xs font-bold uppercase tracking-widest mb-2 block text-muted-foreground">Max Cost</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="無"
              defaultValue={searchParams.get('maxPrice') || ''}
              onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
              className="bg-muted/30 border-primary/10 text-xs"
            />
          </div>
        </div>
        
        {isPending && (
          <div className="text-xs font-medium text-primary animate-pulse mb-3 ml-2 flex items-center gap-2">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            Re-sequencing...
          </div>
        )}
      </div>
    </div>
  );
}

