/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        caribe: {
          50: '#f0fdff',
          100: '#e0f8fe',
          200: '#b9effc',
          300: '#7cdff9',
          400: '#36cbf3',
          500: '#0cb0e2',
          600: '#028dc0',
          700: '#03719c',
          800: '#075f81',
          900: '#0c4f6c',
          950: '#053349',
        },
        arena: {
          50: '#fdfbf7',
          100: '#f9f5ec',
          200: '#f2e8d5',
          300: '#e9d7b5',
          400: '#ddc08e',
          500: '#d1a76b',
        },
        coral: {
          50: '#fff5f5',
          100: '#ffe8e8',
          500: '#f87171',
          600: '#ef4444',
        }
      },
      backgroundImage: {
        'coastal-mesh': 'radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
