'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/lib/schema';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps extends ButtonProps {
  product: Product;
  quantity?: number;
  showIcon?: boolean;
}

export function AddToCartButton({
  product,
  quantity = 1,
  showIcon = true,
  className,
  children,
  ...props
}: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      addItem(product, quantity);
      toast.success(`${product.name} Added to Enclosure`, {
        description: `Secure transport of ${quantity} ${quantity === 1 ? 'specimen' : 'specimens'} has been initiated.`,
        icon: <ShoppingCart className="h-4 w-4" />,
      });
    } catch (error) {
      toast.error('Failed to initiate transport', {
        description: 'System error in the genetics lab.'
      });
      console.error('Add to cart error:', error);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={cn(showIcon && 'gap-2', className)}
      {...props}
    >
      {showIcon && <ShoppingCart className="h-5 w-5" />}
      {children || 'ADOPT NOW'}
    </Button>
  );
}

