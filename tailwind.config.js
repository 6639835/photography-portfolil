/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 