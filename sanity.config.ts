import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure'
import { projectId, dataset } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'הבית הירוק - ניהול תוכן',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  // Studio configuration
  studio: {
    components: {
      // logo: Logo, // Custom logo component if needed
    }
  },

  // Document actions configuration
  document: {
    // Remove duplicate action for singletons
    actions: (prev, context) => {
      // Remove duplicate action from singleton types
      const singletonTypes = ['homePage', 'settings']
      if (singletonTypes.includes(context.schemaType)) {
        return prev.filter((action) => action.action !== 'duplicate')
      }
      return prev
    },
  },
})