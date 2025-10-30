/**
 * Sanity GROQ Queries and Type Definitions
 * 
 * GROQ (Graph-Relational Object Queries) is Sanity's query language.
 * Learn more: https://www.sanity.io/docs/groq
 * 
 * This file contains:
 * 1. TypeScript interfaces for Sanity document types
 * 2. GROQ queries to fetch content
 * 3. Helper functions to fetch and transform data
 */

import { sanityFetch } from '@/sanity/client'

/**
 * TypeScript Interfaces for Sanity Documents
 */

// Sanity image type with metadata
export interface SanityImage {
  _type: 'image'
  asset?: {
    _ref?: string
    _type?: 'reference'
    url?: string
  }
  alt?: string
  caption?: string
}

// Home page content type - Updated for new Hero structure
export interface HomePageContent {
  _id: string
  _type: 'homePage'
  hero: {
    video?: {
      asset: {
        url: string
      }
    }
    image?: SanityImage
    inspirationalText: string
    transitionText: string
    ctaButtonText: string
    ctaButtonLink: string
  }
  contentBox: {
    logo?: SanityImage
    subtitle: string
    location: string
    secondaryCtaText: string
    secondaryCtaLink: string
  }
  storyTitle?: string
  storyText?: string
  philosophyTitle?: string
  philosophyText?: string
  communityTitle?: string
  communityText?: string
}

// Class/Service type
export interface ClassType {
  _id: string
  _type: 'class'
  title: string
  slug: {
    current: string
  }
  description: string
  duration: number // in minutes
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  image: SanityImage
  schedule?: Array<{
    _key: string
    dayOfWeek: string
    time: string
  }>
  maxParticipants?: number
  price?: number
}

// Instructor type
export interface Instructor {
  _id: string
  _type: 'instructor'
  name: string
  bio: string
  image: SanityImage
  specialties?: string[]
  certifications?: string[]
}

/**
 * GROQ Queries
 */

// Query for home page content - Updated for new structure
export const HOME_PAGE_QUERY = `
  *[_type == "homePage"][0] {
    _id,
    hero {
      video {
        asset->{url}
      },
      image {
        ...,
        asset->{
          _ref,
          url
        }
      },
      inspirationalText,
      transitionText,
      ctaButtonText,
      ctaButtonLink
    },
    contentBox {
      logo {
        ...,
        asset->{
          _ref,
          url
        }
      },
      subtitle,
      location,
      secondaryCtaText,
      secondaryCtaLink
    },
    storyTitle,
    storyText,
    philosophyTitle,
    philosophyText,
    communityTitle,
    communityText
  }
`

// Query for all classes
export const CLASSES_QUERY = `
  *[_type == "class"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    duration,
    level,
    image,
    schedule[] {
      _key,
      dayOfWeek,
      time
    },
    maxParticipants,
    price
  }
`

// Query for single class by slug
export const CLASS_BY_SLUG_QUERY = `
  *[_type == "class" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    duration,
    level,
    image,
    schedule[] {
      _key,
      dayOfWeek,
      time
    },
    maxParticipants,
    price
  }
`

// Query for all instructors
export const INSTRUCTORS_QUERY = `
  *[_type == "instructor"] | order(name asc) {
    _id,
    name,
    bio,
    image,
    specialties,
    certifications
  }
`

/**
 * Data Fetching Functions
 */

/**
 * Fetch home page content from Sanity
 * 
 * Usage in Server Components:
 * const homeContent = await getHomePageContent()
 * 
 * Usage in Client Components with SWR or React Query:
 * const { data } = useSWR('home', getHomePageContent)
 */
export async function getHomePageContent(): Promise<HomePageContent | null> {
  try {
    const data = await sanityFetch<HomePageContent>(HOME_PAGE_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching home page content:', error)
    return null
  }
}

/**
 * Fetch all classes
 */
export async function getAllClasses(): Promise<ClassType[]> {
  try {
    const data = await sanityFetch<ClassType[]>(CLASSES_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching classes:', error)
    return []
  }
}

/**
 * Fetch single class by slug
 */
export async function getClassBySlug(slug: string): Promise<ClassType | null> {
  try {
    const data = await sanityFetch<ClassType>(CLASS_BY_SLUG_QUERY, { slug })
    return data
  } catch (error) {
    console.error(`Error fetching class with slug ${slug}:`, error)
    return null
  }
}

/**
 * Fetch all instructors
 */
export async function getAllInstructors(): Promise<Instructor[]> {
  try {
    const data = await sanityFetch<Instructor[]>(INSTRUCTORS_QUERY)
    return data || []
  } catch (error) {
    console.error('Error fetching instructors:', error)
    return []
  }
}

/**
 * Helper function to check if content is available
 */
export function hasValidContent(content: any): boolean {
  return content && Object.keys(content).length > 0
}

/**
 * Transform Sanity portable text to plain text
 * (Useful for meta descriptions, previews, etc.)
 */
export function toPlainText(blocks: any[] = []): string {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}