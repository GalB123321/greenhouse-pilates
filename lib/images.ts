/**
 * Image manifest for the Green House Pilates website
 * Organized by category for easy access throughout the application
 */

export const images = {
  hero: [
    '/images/hero/hero-ronit-field.jpg', // Ronit in yellow flower field
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
  ],
  studio: [
    '/images/studio/studio-1.jpg',
    '/images/studio/studio-2.jpg',
    '/images/studio/studio-3.jpg',
    '/images/studio/studio-4.jpg',
  ],
  classes: [
    '/images/classes/class-reformer-group.jpg', // Group on reformer machines
    '/images/classes/class-1.jpg',
    '/images/classes/class-2.jpg',
    '/images/classes/class-3.jpg',
    '/images/classes/class-4.jpg',
    '/images/classes/class-5.jpg',
    '/images/classes/class-6.jpg',
  ],
  instructors: [
    '/images/instructors/instructor-1.jpg',
    '/images/instructors/instructor-2.jpg',
    '/images/instructors/instructor-3.jpg',
    '/images/instructors/instructor-4.jpg',
  ],
  community: [
    '/images/community/community-outdoor-group.jpg', // Group sitting outdoors
    '/images/community/community-group-hug.jpg', // Three women hugging
    '/images/community/community-1.jpg',
    '/images/community/community-2.jpg',
  ],
  details: [
    '/images/details/detail-1.jpg',
    '/images/details/detail-2.jpg',
  ],
}

/**
 * Helper function to get a random image from a category
 * @param category - The category to select from
 * @returns A random image path from the selected category
 */
export const getRandomImage = (category: keyof typeof images): string => {
  const categoryImages = images[category]
  return categoryImages[Math.floor(Math.random() * categoryImages.length)]
}

/**
 * Helper function to get a specific image by index
 * @param category - The category to select from
 * @param index - The index of the image (defaults to 0)
 * @returns The image path at the specified index
 */
export const getImageByIndex = (category: keyof typeof images, index: number = 0): string => {
  const categoryImages = images[category]
  return categoryImages[Math.min(index, categoryImages.length - 1)]
}

/**
 * Default images for specific components
 */
export const defaultImages = {
  hero: images.hero[0], // Ronit in field
  story: images.studio[0],
  classReformer: images.classes[0],
  communityHug: images.community[1],
  communityOutdoor: images.community[0],
}

/**
 * Alt text descriptions in Hebrew for accessibility
 */
export const altTexts = {
  hero: 'רונית בשדה פרחים צהובים',
  studio: 'חלל הסטודיו של הבית הירוק',
  classes: 'שיעור פילאטיס בהבית הירוק',
  instructors: 'מדריכת פילאטיס',
  community: 'קהילת הבית הירוק',
  details: 'פרטים מהסטודיו',
}