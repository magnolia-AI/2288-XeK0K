'use client';

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
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    startTransition(() => {
      router.push(`/products?${params.toString()}`);
    });
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Label htmlFor="search" className="sr-only">Search</Label>
          <Input
            id="search"
            placeholder="Search T-Rexes..."
            defaultValue={searchParams.get('q') || ''}
            onChange={(e) => updateFilters({ q: e.target.value })}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Select
            defaultValue={searchParams.get('sort') || 'newest'}
            onValueChange={(value) => updateFilters({ sort: value })}
          >
            <SelectTrigger aria-label="Sort by">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-[200px]">
          <Label htmlFor="category" className="text-sm font-medium mb-1.5 block">Category</Label>
          <Select
            defaultValue={searchParams.get('category') || 'all'}
            onValueChange={(value) => updateFilters({ category: value === 'all' ? null : value })}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Apex">Apex Predator</SelectItem>
              <SelectItem value="Scavenger">Scavenger</SelectItem>
              <SelectItem value="Aquatic">Aquatic</SelectItem>
              <SelectItem value="Miniature">Miniature</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 items-end flex-grow md:flex-grow-0">
          <div className="w-24">
            <Label htmlFor="minPrice" className="text-sm font-medium mb-1.5 block">Min Price</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="0"
              defaultValue={searchParams.get('minPrice') || ''}
              onChange={(e) => updateFilters({ minPrice: e.target.value })}
            />
          </div>
          <div className="w-24">
            <Label htmlFor="maxPrice" className="text-sm font-medium mb-1.5 block">Max Price</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="Any"
              defaultValue={searchParams.get('maxPrice') || ''}
              onChange={(e) => updateFilters({ maxPrice: e.target.value })}
            />
          </div>
        </div>
        
        {isPending && (
          <div className="text-sm text-muted-foreground animate-pulse mb-2">
            Updating results...
          </div>
        )}
      </div>
    </div>
  );
}

