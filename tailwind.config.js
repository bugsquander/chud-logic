const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        vomit: {
          500: '#adf500'
        }
      },  
      fontFamily: {
        sans: ['var(--font-barlow)', ...fontFamily.sans],
      }
    }
  },
  plugins: []
};
