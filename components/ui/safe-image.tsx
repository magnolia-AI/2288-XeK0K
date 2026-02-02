'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
  productName?: string;
}

/**
 * A wrapper around Next.js Image component that handles load errors 
 * by falling back to a prehistoric-themed placeholder or generated image.
 */
export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/products/placeholder.webp', 
  productName,
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Set the source when it changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      
      // If productName is provided, use the dynamic placeholder generator
      // Otherwise fallback to the static placeholder image
      if (productName) {
        setImgSrc(`/api/placeholder?name=${encodeURIComponent(productName)}`);
      } else {
        setImgSrc(fallbackSrc);
      }
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}

