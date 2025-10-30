// Import all schema types
import homePage from './homePage'
import classSchema from './class'
import teamMember from './teamMember'
import settings from './settings'

// Export schema types array for Sanity configuration
export const schemaTypes = [
  // Singleton documents
  homePage,
  settings,
  
  // Collection documents
  classSchema,
  teamMember,
]