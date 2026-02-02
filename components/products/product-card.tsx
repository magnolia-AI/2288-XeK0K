import { SafeImage } from '@/components/ui/safe-image';
import Link from 'next/link';
import { Product } from '@/lib/schema';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { AddToCartButton } from '@/components/products/add-to-cart-button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl bg-card">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden">
        <SafeImage
          src={product.imageUrl}
          alt={product.name}
          productName={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {product.category || 'Standard'}
        </Badge>
      </Link>
      
      <CardHeader className="p-5 flex-none space-y-1.5">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl font-black leading-none tracking-tight">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </Link>
          </CardTitle>
        </div>
        <p className="font-extrabold text-2xl text-primary">
          {formatCurrency(Number(product.price))}
        </p>
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

      <CardFooter className="p-5 pt-0">
        <AddToCartButton 
          product={product} 
          className="w-full font-black text-sm uppercase tracking-widest h-12 shadow-md hover:shadow-lg transition-all"
        />
      </CardFooter>
    </Card>
  );
}

