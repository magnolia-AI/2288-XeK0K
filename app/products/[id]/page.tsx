import db from "@/lib/db";
import * as schema from "@/lib/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { SafeImage } from "@/components/ui/safe-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  if (isNaN(productId)) {
    notFound();
  }

  const product = await db.query.products.findFirst({
    where: eq(schema.products.id, productId),
  });

  if (!product) {
    notFound();
  }

  // Cast specs to handle potential undefined or incorrect types
  const specs = (product.specs as any) || {};

  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border shadow-lg">
          <SafeImage
            src={product.imageUrl}
            alt={product.name}
            productName={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-widest font-semibold border-primary/30">
                Tyrannosaurus Rex
              </Badge>
              {product.stock > 0 ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-none">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" className="border-none">Out of Stock</Badge>
              )}
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">{product.name}</h1>
            <p className="text-3xl font-bold text-primary">
              ${Number(product.price).toLocaleString()}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-tight">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {product.description || "A magnificent specimen of the late Cretaceous period. This Apex predator is sure to be the center of attention in any enclosure."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-muted/30 border shadow-none">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Height</p>
                <p className="text-xl font-bold">{specs.height || "4.6m (15ft)"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border shadow-none">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Weight</p>
                <p className="text-xl font-bold">{specs.weight || "8,000kg"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border shadow-none">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Bite Force</p>
                <p className="text-xl font-bold">{specs.biteForce || "35,000 N"}</p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border shadow-none">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Temperament</p>
                <p className="text-xl font-bold capitalize">{specs.temperament || "Aggressive"}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <Button size="lg" className="h-16 text-xl font-bold shadow-xl hover:shadow-2xl transition-all" disabled={product.stock === 0}>
              {product.stock > 0 ? "Add to Cart" : "Currently Unavailable"}
            </Button>
            <div className="flex items-center justify-center gap-2 text-muted-foreground italic text-sm">
              <span>⚠️ Special transport permit required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 space-y-8">
        <h2 className="text-3xl font-extrabold border-l-4 border-primary pl-4 tracking-tight">Dinosaur Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Biological Data</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">Diet</span>
                <span className="font-semibold">{specs.diet || "Carnivore"}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">Age Group</span>
                <span className="font-semibold">{specs.age || "Adult"}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">Species</span>
                <span className="font-semibold">T. Rex</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Physical Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">Length</span>
                <span className="font-semibold">{specs.length || "12.3m (40ft)"}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">Top Speed</span>
                <span className="font-semibold text-red-500">{specs.speed || "27 mph"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
