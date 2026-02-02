'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

/**
 * A wrapper around Next.js Image component that handles load errors 
 * by falling back to a prehistoric-themed placeholder.
 */
export function SafeImage({ src, alt, fallbackSrc = '/images/products/placeholder.webp', ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Set the source when it changes
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
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
