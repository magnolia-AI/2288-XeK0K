import { SafeImage } from '@/components/ui/safe-image';
import Link from 'next/link';
import { Product } from '@/lib/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, cn } from '@/lib/utils';
import { AddToCartButton } from '@/components/products/add-to-cart-button';
import { ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product & { inventoryQuantity?: number | null };
}

export function ProductCard({ product }: ProductCardProps) {
  // Extract custom features from specs if available
  const isNew = product.specs?.isNew || false;
  const isOnSale = product.specs?.onSale || false;
  const salePrice = product.specs?.salePrice;
  const secondaryImageUrl = product.specs?.secondaryImageUrl;

  // Stock status logic
  const inventoryLevel = product.inventoryQuantity ?? 0;
  const isOutOfStock = inventoryLevel <= 0;
  const isLowStock = inventoryLevel > 0 && inventoryLevel < 10;
  const isInStock = inventoryLevel >= 10;

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={item}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl bg-card">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          {/* Primary Image */}
          <SafeImage
            src={product.imageUrl}
            alt={product.name}
            productName={product.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 group-hover:scale-110",
              secondaryImageUrl && "group-hover:opacity-0"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          
          {/* Secondary Image Placeholder (Appears on Hover) */}
          {secondaryImageUrl && (
            <SafeImage
              src={secondaryImageUrl}
              alt={`${product.name} alternate view`}
              productName={product.name}
              fill
              className="object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Hover Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isOutOfStock ? (
            <Badge variant="destructive" className="border-none font-black px-3 py-1 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              OUT OF STOCK
            </Badge>
          ) : isLowStock ? (
            <Badge variant="warning" className="border-none font-black px-3 py-1 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              LOW STOCK: {inventoryLevel}
            </Badge>
          ) : (
            <Badge variant="success" className="border-none font-black px-3 py-1 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              IN STOCK
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-primary text-primary-foreground border-none font-black px-3 py-1 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              NEW SPECIMEN
            </Badge>
          )}
          {isOnSale && (
            <Badge variant="destructive" className="border-none font-black px-3 py-1 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
              LIMITED OFFER
            </Badge>
          )}
        </div>

        {/* Category Badge (Top Right) */}
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
          {product.category || 'Standard'}
        </Badge>

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Link 
            href={`/products/${product.slug}`}
            className="bg-background/90 hover:bg-background text-foreground p-3 rounded-full shadow-xl translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-[50ms]"
          >
            <Eye className="h-5 w-5" />
            <span className="sr-only">View Details</span>
          </Link>
          <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-[100ms]">
            <AddToCartButton 
              product={product} 
              showIcon 
              disabled={isOutOfStock}
              className="rounded-full h-12 w-12 p-0 bg-primary/90 hover:bg-primary shadow-xl"
            >
              <span className="sr-only">Quick Add</span>
            </AddToCartButton>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <CardHeader className="p-5 flex-none space-y-1.5">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-black leading-none tracking-tight">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </Link>
          </CardTitle>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="font-extrabold text-2xl text-primary">
            {formatCurrency(Number(isOnSale && salePrice ? salePrice : product.price))}
          </p>
          {isOnSale && salePrice && (
            <p className="text-sm text-muted-foreground line-through font-bold">
              {formatCurrency(Number(product.price))}
            </p>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-5 pb-5 pt-0 flex-grow space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem] leading-relaxed">
          {product.description || "A biologically-authenticated specimen ready for immediate deployment."}
        </p>
        
        <div className="grid grid-cols-2 gap-y-2 border-t pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Temperament</span>
            <span className="text-xs font-bold capitalize">{product.specs?.temperament || 'Aggressive'}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Diet</span>
            <span className="text-xs font-bold capitalize">{product.specs?.diet || 'Carnivore'}</span>
          </div>
        </div>
      </CardContent>

      <div className="px-5 pb-5 mt-auto">
        <AddToCartButton 
          product={product} 
          disabled={isOutOfStock}
          className="w-full font-black text-sm uppercase tracking-widest h-12 shadow-md hover:shadow-lg transition-all"
        >
          {isOutOfStock ? 'OUT OF STOCK' : 'ADOPT NOW'}
        </AddToCartButton>
      </div>
    </Card>
  </motion.div>
  );
}
