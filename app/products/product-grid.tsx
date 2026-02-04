'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/product-card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProductListGrid({ allProducts }: { allProducts: any[] }) {
  if (allProducts.length === 0) {
    return (
      <div className="text-center py-20 bg-muted/20 border-2 border-dashed border-muted rounded-2xl">
        <h3 className="text-xl font-semibold">No specimens matching your criteria</h3>
        <p className="text-muted-foreground mt-2">The DNA archive is currently empty for these parameters.</p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product as any} />
      ))}
    </motion.div>
  );
}

