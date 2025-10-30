import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#2C3E2F',
        'green-primary': '#4A5D4F',
        'green-light': '#8BA888',
        'green-pale': '#E8EDE8',
        'cream': '#FDFBF7',
        'earth': '#D4C5B9',
      },
    },
  },
  plugins: [],
}

export default config