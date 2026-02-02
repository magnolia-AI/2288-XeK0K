import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function generateProductImage(name: string): string {
  // Encode the name for URL safety
  const query = encodeURIComponent(name.toLowerCase());
  
  // We use Unsplash's featured image redirect as the primary source
  // This is a reliable way to get high-quality themed images
  return `https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800&q=${query}`;
}

/**
 * Generates a themed SVG placeholder as a data URL.
 * Used when external images are unavailable or as a fallback.
 */
export function getPlaceholderImage(name: string): string {
  const colors = [
    { bg: '#FEE2E2', text: '#991B1B' }, // Red
    { bg: '#FEF3C7', text: '#92400E' }, // Amber
    { bg: '#D1FAE5', text: '#065F46' }, // Emerald
    { bg: '#DBEAFE', text: '#1E40AF' }, // Blue
    { bg: '#F3E8FF', text: '#6B21A8' }, // Purple
    { bg: '#FCE7F3', text: '#9D174D' }, // Pink
  ];

  // Simple hash to consistently pick the same color for the same name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const theme = colors[hash % colors.length];
  
  const svg = `
    <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="800" fill="${theme.bg}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="system-ui, sans-serif" 
        font-size="48" 
        font-weight="bold" 
        fill="${theme.text}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 3)}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

