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
          800: '#1c1c1e',
          900: '#111112',
        },
        'photo-accent': {
          300: '#d4af7d',
          400: '#c49f6d',
          500: '#b48f5d',
          600: '#a47f4d',
        },
        'photo-teal': {
          300: '#78a0b4',
          400: '#6890a4',
          500: '#587f94',
        },
        'photo-dark': {
          950: '#080808',
          975: '#050505',
          990: '#030303',
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'blur-overlay': 'rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)',
        },
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-lg': {
          'backdrop-filter': 'blur(16px)',
        },
        '.backdrop-blur-xl': {
          'backdrop-filter': 'blur(24px)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 