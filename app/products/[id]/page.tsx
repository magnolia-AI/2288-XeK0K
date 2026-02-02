import db from "@/lib/db";
import * as schema from "@/lib/schema";
import { eq, or } from "drizzle-orm";
import { notFound } from "next/navigation";
import { SafeImage } from "@/components/ui/safe-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/products/add-to-cart-button";
import { ChevronRight, Home, LayoutGrid } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id: idOrSlug } = await params;
  
  // Try to parse as integer for ID lookup, otherwise use as slug
  const productId = parseInt(idOrSlug);
  const isNumeric = !isNaN(productId);

  const product = await db.query.products.findFirst({
    where: isNumeric 
      ? or(eq(schema.products.id, productId), eq(schema.products.slug, idOrSlug))
      : eq(schema.products.slug, idOrSlug),
  });

  if (!product) {
    notFound();
  }

  const specs = (product.specs as any) || {};

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 mt-16 max-w-7xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
          <Home className="h-3.5 w-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0" />
        <Link href="/products" className="hover:text-primary flex items-center gap-1 transition-colors">
          <LayoutGrid className="h-3.5 w-3.5" />
          <span>Catalog</span>
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0" />
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Visuals */}
        <div className="space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted border shadow-2xl group">
            <SafeImage
              src={product.imageUrl}
              alt={product.name}
              productName={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {product.stock > 0 && product.stock < 5 && (
              <Badge className="absolute top-6 left-6 bg-orange-500 text-white border-none shadow-lg px-4 py-1.5 text-sm font-bold">
                ONLY {product.stock} LEFT
              </Badge>
            )}
          </div>
        </div>

        {/* Product Summary */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 font-bold text-xs uppercase tracking-widest">
                {product.category || "Standard T-Rex"}
              </Badge>
              {product.stock > 0 ? (
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Ready for Delivery
                </div>
              ) : (
                <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-red-500/20 px-3 py-1 font-bold text-xs uppercase tracking-widest">
                  Sold Out
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-[1.1]">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mt-6">
              <span className="text-4xl font-black text-primary mb-2">
                ${Number(product.price).toLocaleString()}
              </span>
              {specs.rarity && (
                <span className="text-sm font-medium text-muted-foreground italic">
                  Rarity: {specs.rarity}
                </span>
              )}
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="space-y-6 mb-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Detailed Description</h3>
            <p className="text-lg text-muted-foreground leading-relaxed leading-relaxed font-medium">
              {product.description || "An exceptional specimen of the tyrannosaurid theropod dinosaur. This creature represents the pinnacle of ancient predatory evolution, meticulously reconstructed for modern observers."}
            </p>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <Card className="bg-muted/30 border-none shadow-sm transition-colors hover:bg-muted/50">
              <CardContent className="p-4">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5 text-center">Height</p>
                <p className="text-lg font-bold text-center">{specs.height || "4.6m"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none shadow-sm transition-colors hover:bg-muted/50">
              <CardContent className="p-4">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5 text-center">Weight</p>
                <p className="text-lg font-bold text-center">{specs.weight || "8,000kg"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none shadow-sm transition-colors hover:bg-muted/50">
              <CardContent className="p-4">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5 text-center">Temperament</p>
                <p className="text-lg font-bold text-center capitalize">{specs.temperament || "Aggressive"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none shadow-sm transition-colors hover:bg-muted/50">
              <CardContent className="p-4">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5 text-center">Age</p>
                <p className="text-lg font-bold text-center">{specs.age || "Adult"}</p>
              </CardContent>
            </Card>
          </div>

          {/* Add to Cart - Task 5 */}
          <div className="space-y-4 mt-auto">
            <AddToCartButton 
              product={product} 
              size="lg" 
              className="w-full h-16 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
            />
            <p className="text-center text-xs text-muted-foreground font-medium flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Special transport permit required for interstellar shipping
            </p>
          </div>
        </div>
      </div>

      {/* Extended Specifications Section */}
      <section className="mt-24 pt-24 border-t">
        <h2 className="text-3xl font-black mb-12 tracking-tight flex items-center gap-3">
          <span className="bg-primary h-8 w-2 rounded-full"></span>
          BIOLOGICAL SPECIFICATIONS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {[
            { label: "Dietary Requirement", value: specs.diet || "Mega-Carnivore" },
            { label: "Bite Force", value: specs.biteForce || "35,000 Newtons" },
            { label: "Top Pursuit Speed", value: specs.speed || "27 mph" },
            { label: "Intelligence Quotient", value: specs.iq || "Estimated 2.0" },
            { label: "Proto-Feather Coverage", value: specs.feathers || "Limited (15%)" },
            { label: "Native Environment", value: specs.nativeRegion || "North America (Hell Creek)" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b group">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                {item.label}
              </span>
              <span className="font-bold text-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
