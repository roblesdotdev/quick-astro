import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--sans-font)', 'sans-serif'],
        display: ['var(--display-font)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
