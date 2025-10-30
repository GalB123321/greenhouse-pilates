import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './sanity/env'

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  // Disable auto-updates for better control
  autoUpdates: false,
  // Set Sanity Studio specific environment
  env: {
    development: {
      envVars: {
        SANITY_STUDIO: 'true'
      }
    },
    production: {
      envVars: {
        SANITY_STUDIO: 'true'
      }
    }
  },
  // Vite configuration to handle CSS separately from Next.js
  vite: {
    css: {
      postcss: '.sanity/postcss.config.js'
    },
    resolve: {
      alias: {
        // Prevent Tailwind config from being loaded
        './tailwind.config.ts': false,
        './tailwind.config.js': false
      }
    }
  }
})