/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        resort: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        caribbean: {
          dark: '#031726',
          navy: '#05263d',
          card: '#0a3554',
          accent: '#00d2d3',
          sand: '#f7d794',
          gold: '#e1b12c',
          coral: '#ff6b6b'
        }
      }
    },
  },
  plugins: [],
}
