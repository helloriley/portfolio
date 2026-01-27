import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge class names intelligently (https://motion-primitives.com/docs/installation)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
