/**
 * Sanity Image URL Builder
 * 
 * This utility helps generate optimized image URLs from Sanity's CDN.
 * It supports transformations like resizing, cropping, and format conversion.
 * 
 * Usage in components:
 * import { urlFor } from '@/sanity/image'
 * 
 * <img src={urlFor(image).width(800).height(600).url()} />
 * 
 * For Next.js Image component:
 * <Image 
 *   src={urlFor(image).url()} 
 *   width={800} 
 *   height={600} 
 *   alt="Description"
 * />
 */

import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'
import { projectId, dataset } from './env'

// Create the image URL builder instance
const builder = imageUrlBuilder({ projectId, dataset })

/**
 * Generate image URLs with optional transformations
 * 
 * @param source - The Sanity image object or reference
 * @returns URL builder instance for chaining transformations
 * 
 * Available transformations:
 * - .width(pixels) - Set width
 * - .height(pixels) - Set height
 * - .size(width, height) - Set both dimensions
 * - .auto('format') - Auto-select best format (WebP, AVIF, etc.)
 * - .quality(0-100) - Set JPEG quality
 * - .blur(amount) - Apply blur effect
 * - .sharpen(amount) - Apply sharpening
 * - .rect(x, y, width, height) - Crop to rectangle
 * - .fit('crop'|'clip'|'fill'|'fillmax'|'max'|'scale'|'min') - Set fit mode
 * - .url() - Get the final URL string
 * 
 * Example with transformations:
 * urlFor(image)
 *   .width(800)
 *   .height(600)
 *   .auto('format')
 *   .quality(80)
 *   .url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Helper to get a blur placeholder for lazy loading
 * 
 * @param source - The Sanity image object
 * @returns Low quality blurred image URL for placeholder
 */
export function getBlurPlaceholder(source: SanityImageSource): string {
  return urlFor(source)
    .width(20)
    .quality(20)
    .blur(10)
    .url()
}

/**
 * Helper to get responsive image URLs
 * 
 * @param source - The Sanity image object
 * @param widths - Array of widths for srcset
 * @returns Object with src and srcset for responsive images
 */
export function getResponsiveImageProps(
  source: SanityImageSource,
  widths: number[] = [320, 640, 960, 1280, 1920]
) {
  const src = urlFor(source).width(widths[widths.length - 1]).url()
  
  const srcset = widths
    .map((width) => `${urlFor(source).width(width).url()} ${width}w`)
    .join(', ')
  
  return { src, srcset }
}