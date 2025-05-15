/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'photo-gray': {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          900: '#111112',
        },
        'photo-accent': {
          300: '#d4b88b',
          400: '#c4a87b',
          500: '#b4986b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            a: {
              color: '#ffffff',
              '&:hover': {
                color: '#cccccc',
              },
            },
          },
        },
      },
      backgroundImage: {
        'grain-pattern': "url('/images/grain.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 