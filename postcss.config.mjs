// Check if we're in Sanity Studio context
const isSanityStudio = process.env.SANITY_STUDIO === 'true' || 
                       process.argv.some(arg => arg.includes('sanity'));

// Return empty config for Sanity Studio, Tailwind config for Next.js
const config = isSanityStudio 
  ? {} 
  : {
      plugins: {
        "@tailwindcss/postcss": {},
      },
    };

export default config;