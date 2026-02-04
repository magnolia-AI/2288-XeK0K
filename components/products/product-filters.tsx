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
import { useTransition, useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { label: 'Standard T-Rex', value: 'Standard T-Rex' },
  { label: 'Rare Variants', value: 'Rare Variants' },
  { label: 'Specialized', value: 'Specialized' },
  { label: 'Apex Predatory', value: 'Apex Predatory' },
  { label: 'Herbivore Enforcers', value: 'Herbivore Enforcers' },
];

const TEMPERAMENTS = ['Aggressive', 'Passive', 'Protective', 'Docile', 'Unpredictable'];
const DIETS = ['Carnivore', 'Herbivore', 'Omnivore'];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Price range state
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 500000,
  ]);

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

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handlePriceCommit = (value: number[]) => {
    updateFilters({
      minPrice: value[0].toString(),
      maxPrice: value[1].toString(),
    });
  };

  const toggleCategory = (value: string) => {
    const current = searchParams.get('category')?.split(',') || [];
    const updated = current.includes(value)
      ? current.filter((c) => c !== value)
      : [...current, value];
    
    updateFilters({ category: updated.length ? updated.join(',') : null });
  };

  const toggleSpec = (key: string, value: string) => {
    const current = searchParams.get(key)?.split(',') || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    
    updateFilters({ [key]: updated.length ? updated.join(',') : null });
  };

  return (
    <div className="space-y-8 h-full pb-10">
      {/* Search Progress */}
      {isPending && (
        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] animate-pulse flex items-center gap-2 mb-2">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          Calibrating DNA...
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/80">
          Genetic Lineage
        </h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <div key={cat.value} className="flex items-center space-x-2 group cursor-pointer">
              <Checkbox
                id={`cat-${cat.value}`}
                checked={searchParams.get('category')?.split(',').includes(cat.value)}
                onCheckedChange={() => toggleCategory(cat.value)}
                className="border-primary/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label
                htmlFor={`cat-${cat.value}`}
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer group-hover:text-primary transition-colors"
              >
                {cat.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-primary/5" />

      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary/80">
            Resource Allocation
          </h3>
          <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
            USD
          </span>
        </div>
        <Slider
          value={[priceRange[0], priceRange[1]]}
          max={1000000}
          step={1000}
          onValueChange={handlePriceChange}
          onValueCommit={handlePriceCommit}
          className="mb-6"
        />
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <Label className="text-[10px] uppercase text-muted-foreground font-bold mb-1 block tracking-tighter">Min</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">$</span>
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                onBlur={() => handlePriceCommit([priceRange[0], priceRange[1]])}
                className="bg-muted/30 border-primary/10 text-[11px] h-8 pl-5 font-mono"
              />
            </div>
          </div>
          <div className="flex-1">
            <Label className="text-[10px] uppercase text-muted-foreground font-bold mb-1 block tracking-tighter">Max</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">$</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                onBlur={() => handlePriceCommit([priceRange[0], priceRange[1]])}
                className="bg-muted/30 border-primary/10 text-[11px] h-8 pl-5 font-mono"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary/5" />

      {/* Temperament Filters */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/80">
          Beast Temperament
        </h3>
        <div className="flex flex-wrap gap-2">
          {TEMPERAMENTS.map((temp) => (
            <Badge
              key={temp}
              variant="outline"
              className={cn(
                "cursor-pointer text-[10px] px-2 py-0.5 transition-all",
                searchParams.get('temperament')?.split(',').includes(temp)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/30 hover:bg-primary/10 border-primary/5"
              )}
              onClick={() => toggleSpec('temperament', temp)}
            >
              {temp}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="bg-primary/5" />

      {/* Diet Filters */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/80">
          Dietary Needs
        </h3>
        <div className="space-y-2.5">
          {DIETS.map((diet) => (
            <div key={diet} className="flex items-center space-x-2 group cursor-pointer">
              <Checkbox
                id={`diet-${diet}`}
                checked={searchParams.get('diet')?.split(',').includes(diet)}
                onCheckedChange={() => toggleSpec('diet', diet)}
                className="border-primary/20"
              />
              <Label
                htmlFor={`diet-${diet}`}
                className="text-xs font-medium cursor-pointer group-hover:text-primary transition-colors"
              >
                {diet}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => router.push('/products')}
        className="w-full py-2.5 text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all rounded-md mt-4"
      >
        Reset Protocols
      </button>
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
      <SelectTrigger className="w-[180px] bg-muted/30 border-primary/10 font-bold text-xs uppercase tracking-wider h-11">
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
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const searchTimeoutRef = React.useRef<any>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    
    searchTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value) params.set('q', value);
      else params.delete('q');
      router.push(`/products?${params.toString()}`);
    }, 400);
  };

  return (
    <div className="relative flex-1 group">
      <Input
        placeholder="Filter by keyword or lab origin..."
        value={query}
        onChange={handleSearchChange}
        className="bg-muted/30 border-primary/10 pl-11 h-11 text-sm focus-visible:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
    </div>
  );
}

