import db from "@/lib/db";
import * as schema from "@/lib/schema";
import { eq, or } from "drizzle-orm";
import { notFound } from "next/navigation";
import { SafeImage } from "@/components/ui/safe-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/products/add-to-cart-button";
import { Home, LayoutGrid, ShieldCheck, Truck, RotateCcw, Zap } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
  
  // Mock secondary images for carousel demonstration
  const images = [
    product.imageUrl,
    "https://images.unsplash.com/photo-1525833447209-e8b1ff0a19cb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560148192-baeb9e6ee0a2?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div className="flex flex-col flex-1 bg-background">
      {/* Breadcrumb Section - Slim & Minimal */}
      <div className="bg-muted/10">
        <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="hover:text-primary transition-colors">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products" className="hover:text-primary transition-colors">
                  Catalog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* Left Column: Image Carousel */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[1/1] overflow-hidden rounded-3xl border bg-muted/30 shadow-sm">
                      <SafeImage
                        src={img}
                        alt={`${product.name} - View ${index + 1}`}
                        productName={product.name}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-4 absolute bottom-4 right-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>

            {/* Features/Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Safe Transit</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 text-primary">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Verified DNA</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Instinct-Prime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-primary/30 text-primary font-bold tracking-widest uppercase text-[10px] px-2 py-0.5">
                  {product.category || "Cretaceous"}
                </Badge>
                {product.stock > 0 && product.stock < 5 ? (
                  <Badge variant="destructive" className="bg-red-500/10 text-red-500 border-none font-bold text-[10px]">
                    LOW STOCK: {product.stock} REMAINING
                  </Badge>
                ) : product.stock > 0 ? (
                  <span className="text-xs font-bold text-green-500 flex items-center gap-1 ml-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Available for Immediate Deployment
                  </span>
                ) : null}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-primary">
                  ${Number(product.price).toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground line-through opacity-50 font-bold italic">
                  ${(Number(product.price) * 1.25).toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
              {product.description || "An exceptional specimen of the tyrannosaurid theropod dinosaur. This creature represents the pinnacle of ancient predatory evolution, meticulously reconstructed for modern observers."}
            </p>

            {/* Variant Selectors (Mock) */}
            <div className="space-y-8 mb-10">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label className="text-sm font-black uppercase tracking-widest">Growth Stage</Label>
                  <span className="text-xs font-bold text-primary italic">Bio-Certified</span>
                </div>
                <RadioGroup defaultValue="adult" className="flex gap-4">
                  <div className="flex-1">
                    <RadioGroupItem value="juvenile" id="juvenile" className="peer sr-only" />
                    <Label
                      htmlFor="juvenile"
                      className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer font-bold text-sm"
                    >
                      Juvenile
                    </Label>
                  </div>
                  <div className="flex-1">
                    <RadioGroupItem value="adult" id="adult" className="peer sr-only" />
                    <Label
                      htmlFor="adult"
                      className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer font-bold text-sm"
                    >
                      Adult
                    </Label>
                  </div>
                  <div className="flex-1">
                    <RadioGroupItem value="elder" id="elder" className="peer sr-only" />
                    <Label
                      htmlFor="elder"
                      className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer font-bold text-sm"
                    >
                      Alpha
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-black uppercase tracking-widest">DNA Purity</Label>
                <RadioGroup defaultValue="99" className="flex gap-4">
                  {["95", "99", "100"].map((lvl) => (
                    <div key={lvl} className="flex-1">
                      <RadioGroupItem value={lvl} id={`dna-${lvl}`} className="peer sr-only" />
                      <Label
                        htmlFor={`dna-${lvl}`}
                        className="flex items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary transition-all cursor-pointer font-bold text-sm"
                      >
                        {lvl}% Pure
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-6 pt-6 border-t">
              <div className="flex items-center gap-4">
                <AddToCartButton 
                  product={product} 
                  size="lg" 
                  className="flex-1 h-14 md:h-16 text-xl font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] uppercase tracking-wider"
                />
              </div>
              <div className="flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                <span className="flex items-center gap-1.5"><RotateCcw className="h-3 w-3" /> 30-Day Return</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3 w-3" /> Carbon Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Biological Specs */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-2">BIOLOGICAL AUDIT</h2>
              <p className="text-muted-foreground font-medium">Verified fossil-record parity standards.</p>
            </div>
            <div className="h-px bg-border flex-1 mx-8 hidden md:block"></div>
            <Badge variant="secondary" className="px-4 py-1.5 font-bold uppercase tracking-widest text-xs h-fit">
              Doc. ID: TR-29472-X
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Height", value: specs.height || "4.6m", detail: "At Shoulder" },
              { label: "Weight", value: specs.weight || "8,000kg", detail: "Dry Weight" },
              { label: "Temperament", value: specs.temperament || "Aggressive", detail: "Field Observation" },
              { label: "Diet", value: specs.diet || "Mega-Carnivore", detail: "Live Feed" },
            ].map((spec, i) => (
              <Card key={i} className="border-none bg-muted/30 shadow-none overflow-hidden group">
                <CardContent className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">{spec.label}</p>
                  <p className="text-2xl font-black mb-1 group-hover:text-primary transition-colors">{spec.value}</p>
                  <p className="text-[10px] font-bold italic text-muted-foreground/60">{spec.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

