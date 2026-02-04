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
  fallbackSrc = 'https://images.unsplash.com/photo-1525833447209-e8b1ff0a19cb?q=80&w=1000&auto=format&fit=crop', 
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
      
      // Use a consistent, high-quality prehistoric fallback from Unsplash
      // This avoids local API pattern errors and ensures a "premium" look even when images fail
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      // Add unoptimized for fallback if we detect it's a fallback, 
      // but simpler to just use a valid remote pattern
    />
  );
}

