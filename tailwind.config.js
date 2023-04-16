const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '361px',
        md: '560px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px'
      },
      colors: {
        vomit: {
          100: '#a3ff00',
          500: '#adf500',
          900: '#5b8100',
        }
      },
      flex: {
        2: '2 2 0%'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 2px #adf500' },
          '50%': { boxShadow: '0 0 20px #adf500' },
          '100%': { boxShadow: '0 0 2px #adf500' }
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite'
      },
      fontFamily: {
        sans: ['var(--font-barlow)', ...fontFamily.sans]
      },
    }
  },
};
