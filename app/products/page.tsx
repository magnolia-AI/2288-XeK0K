import db from '@/lib/db';
import { products } from '@/lib/schema';
import { ProductCard } from '@/components/products/product-card';
import { ProductFilters } from '@/components/products/product-filters';
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
import { Home, LayoutGrid } from "lucide-react";

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
    .select()
    .from(products)
    .where(where)
    .orderBy(...orderBy);

  if (allProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold">No T-Rexes found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-1">
              <LayoutGrid className="h-3.5 w-3.5" />
              Catalog
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>


export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const { q, sort, category, minPrice, maxPrice } = params;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 mt-16 max-w-7xl">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Our T-Rex Collection</h1>
        <p className="text-muted-foreground">
          Browse our selection of genetically-engineered Tyrannosaurus Rex variants.
        </p>
      </div>

      <ProductFilters />

      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col h-full overflow-hidden border-2 border-muted bg-card rounded-xl">
              <div className="aspect-square bg-muted animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-6 w-2/3 bg-muted animate-pulse rounded" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
                <div className="h-10 w-full bg-muted animate-pulse rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
      }>
        <ProductList 
          query={q} 
          sort={sort} 
          category={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </Suspense>
    </div>
  );
}
