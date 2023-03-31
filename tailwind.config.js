const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        vomit: {
          500: '#adf500'
        }
      },
      screens: {
        '3xl': {'min': '1536px'},
        '4xl': {'min': '1920px'},
      },
      flex: {
        '2': '2 2 0%'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 2px #adf500' },
          '50%': { boxShadow: '0 0 20px #adf500' },
          '100%': { boxShadow: '0 0 2px #adf500' },
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', ...fontFamily.sans],
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")]
};
