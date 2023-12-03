/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '1025px', 'max': '1200px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1201px' },
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
      'lexend-deca': ['Lexend Deca', 'sans-serif'],
    },
    colors: {
      'clr-orange': '#E28625',
      'clr-cyan': '#006971',
      'clr-dark-cyan': '#004140',
      'clr-light': '#F2F2F2',
      'clr-lighter': '#FFFFFF', // add opacity 0.75
    },
  },
  extend: {
  },
  plugins: [],
}




