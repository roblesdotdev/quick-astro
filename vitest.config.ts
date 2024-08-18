/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    include: [
      './src/**/*.test.{ts,js,tsx,jsx}',
      './tests/unit/**/*.test.{ts,js}',
    ],
    coverage: {
      include: ['./src/**/*.{ts,js,tsx,jsx}'],
      all: true,
    },
  },
})
