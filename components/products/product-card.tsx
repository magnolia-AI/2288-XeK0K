import Image from 'next/image';
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
    <Card className="flex flex-col h-full overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block relative aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">
            <Link href={`/products/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </CardTitle>
          <p className="font-bold text-lg">
            {formatCurrency(Number(product.price))}
          </p>
        </div>
        {product.specs?.temperament && (
          <Badge variant="secondary" className="w-fit">
            {product.specs.temperament}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {product.specs?.age && (
            <div>
              <span className="font-semibold text-foreground">Age:</span> {product.specs.age}
            </div>
          )}
          {product.specs?.diet && (
            <div>
              <span className="font-semibold text-foreground">Diet:</span> {product.specs.diet}
            </div>
          )}
          {product.specs?.height && (
            <div>
              <span className="font-semibold text-foreground">Height:</span> {product.specs.height}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/products/${product.slug}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

