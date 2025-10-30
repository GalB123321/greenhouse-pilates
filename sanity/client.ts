/**
 * Sanity Client Configuration
 * 
 * This client is used to fetch content from your Sanity dataset.
 * It's configured to use CDN in production for better performance.
 * 
 * Usage in components:
 * import { client } from '@/sanity/client'
 * const data = await client.fetch(query)
 */

import { createClient } from '@sanity/client'
import { projectId, dataset, apiVersion } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  /**
   * useCdn: true gives fast, cheap responses using a globally distributed cache.
   * Set to false for authenticated requests or server-side rendering
   * where you need the freshest possible data
   */
  
  /**
   * Optional: Add token for authenticated requests
   * token: process.env.SANITY_API_TOKEN,
   * 
   * To create a token:
   * 1. Go to https://www.sanity.io/manage
   * 2. Select your project > API > Tokens
   * 3. Add new token with appropriate permissions
   */
})

/**
 * Helper function for fetching with proper typing
 * 
 * Example usage:
 * const data = await sanityFetch<MyType>(query, params)
 */
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  return client.fetch<T>(query, params)
}