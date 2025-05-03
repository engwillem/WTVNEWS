/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        slate: {
          850: '#141e33',
          950: '#0a101f',
        },
        facebook: '#1877f2',
        twitter: '#1da1f2',
        instagram: '#e4405f',
        youtube: '#ff0000',
        tiktok: '#000000',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#dc2626',
              '&:hover': {
                color: '#b91c1c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};