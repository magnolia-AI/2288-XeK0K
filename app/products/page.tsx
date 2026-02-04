import db from '@/lib/db';
import { products, inventory } from '@/lib/schema';
import { ProductFilters, SearchBar, SortDropdown } from '@/components/products/product-filters';
import { desc, asc, ilike, or, and, eq, gte, lte } from 'drizzle-orm';
import { Suspense } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ProductListGrid } from './product-grid';

export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams: Promise<{
    q?: string;
    sort?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

async function ProductList({
  query,
  sort,
  category,
  minPrice,
  maxPrice,
}: {
  query?: string;
  sort?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  let orderBy;
  switch (sort) {
    case 'price-low':
      orderBy = [asc(products.price)];
      break;
    case 'price-high':
      orderBy = [desc(products.price)];
      break;
    case 'name':
      orderBy = [asc(products.name)];
      break;
    case 'newest':
    default:
      orderBy = [desc(products.createdAt)];
      break;
  }

  const conditions = [];

  if (query) {
    conditions.push(or(ilike(products.name, `%${query}%`), ilike(products.description, `%${query}%`)));
  }

  if (category && category !== 'all') {
    conditions.push(eq(products.category, category));
  }

  if (minPrice) {
    const min = parseFloat(minPrice);
    if (!isNaN(min)) {
      conditions.push(gte(products.price, min.toString()));
    }
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice);
    if (!isNaN(max)) {
      conditions.push(lte(products.price, max.toString()));
    }
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const allProducts = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      category: products.category,
      rating: products.rating,
      specs: products.specs,
      imageUrl: products.imageUrl,
      categoryId: products.categoryId,
      createdAt: products.createdAt,
      updatedAt: products.updatedAt,
      stock: products.stock,
      inventoryQuantity: inventory.quantity,
    })
    .from(products)
    .leftJoin(inventory, eq(products.id, inventory.productId))
    .where(where)
    .orderBy(...orderBy);

  return <ProductListGrid allProducts={allProducts} />;
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex flex-col h-full overflow-hidden border-2 border-muted bg-card rounded-xl">
          <div className="aspect-square bg-muted animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-6 w-2/3 bg-muted animate-pulse rounded" />
            <div className="h-4 w-full bg-muted animate-pulse rounded" />
            <div className="h-10 w-full bg-muted animate-pulse rounded mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const { q, sort, category, minPrice, maxPrice } = params;

  return (
    <div className="flex flex-col flex-1 pb-20">
      {/* Breadcrumb Header */}
      <div className="border-b bg-muted/10 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1.5 transition-colors hover:text-primary">
                  <Home className="h-3.5 w-3.5" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="flex items-center gap-1.5 font-medium">
                  <LayoutGrid className="h-3.5 w-3.5 text-primary" />
                  Specimen Catalog
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
        {/* Title Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-primary">
              Rex Collection
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Explore our genetically optimized specimens, cloned for maximum impact and visual awe.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Suspense fallback={<div className="h-10 w-32 bg-muted animate-pulse rounded-md" />}>
              <SortDropdown />
            </Suspense>
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <div className="pt-6">
                    <ProductFilters />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search & Main Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 space-y-8">
            <Suspense fallback={<div className="h-11 w-full bg-muted animate-pulse rounded-lg" />}>
              <SearchBar />
            </Suspense>

            <Suspense fallback={<GridSkeleton />}>
              <ProductList 
                query={q} 
                sort={sort} 
                category={category}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}

