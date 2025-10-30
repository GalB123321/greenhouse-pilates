/**
 * Sanity CMS Environment Configuration
 * 
 * To get these values:
 * 1. Go to https://www.sanity.io/manage
 * 2. Select your project
 * 3. Go to Settings > API
 * 4. Find your Project ID
 * 5. Dataset is usually "production" for live content
 * 
 * Add these to your .env.local file:
 * NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 * NEXT_PUBLIC_SANITY_DATASET=production
 */

export const projectId = 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yhokzxxt'

export const dataset = 
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// API version - use current date for latest features
export const apiVersion = '2024-01-01'

// Validate configuration in development
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NODE_ENV === 'development') {
  console.warn(
    'Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. ' +
    'Please add it to your .env.local file. ' +
    'Get it from https://www.sanity.io/manage'
  )
}