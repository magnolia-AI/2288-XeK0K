'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/lib/schema';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  showIcon?: boolean;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function AddToCartButton({
  product,
  quantity = 1,
  showIcon = true,
  className,
  variant = 'default',
  size = 'default',
}: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    try {
      addItem(product, quantity);
      toast.success(`${product.name} added to cart`, {
        description: `${quantity} ${quantity === 1 ? 'item' : 'items'} added successfully.`,
        action: {
          label: 'View Cart',
          onClick: () => {
             // In a real app, logic to open cart sheet would go here
             // For now, we just acknowledge the click
          },
        },
      });
    } catch (error) {
      toast.error('Failed to add item to cart');
      console.error('Add to cart error:', error);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={className}
      variant={variant}
      size={size}
    >
      {showIcon && <ShoppingCart className="mr-2 h-4 w-4" />}
      Add to Cart
    </Button>
  );
}

