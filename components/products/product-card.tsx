import { SafeImage } from '@/components/ui/safe-image';
import Link from 'next/link';
import { Product } from '@/lib/schema';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-primary/50 transition-colors">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden">
        <SafeImage
          src={product.imageUrl}
          alt={product.name}
          productName={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </Link>
      <CardHeader className="p-4 flex-none">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl line-clamp-1">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </CardTitle>
          <span className="font-bold text-lg shrink-0">
            {formatCurrency(Number(product.price))}
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          {product.specs?.temperament && (
            <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
              {product.specs.temperament}
            </Badge>
          )}
          {product.specs?.diet && (
            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
              {product.specs.diet}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-muted-foreground border-t pt-4">
          {product.specs?.age && (
            <div>
              <span className="font-medium text-foreground">Age:</span> {product.specs.age}
            </div>
          )}
          {product.specs?.height && (
            <div>
              <span className="font-medium text-foreground">Height:</span> {product.specs.height}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full font-bold" asChild>
          <Link href={`/products/${product.slug}`}>
            ADOPT NOW
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
