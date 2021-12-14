const breakpoints = require('./src/styles/breakpoints.json')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors['indigo'],
        secondary: colors['teal'],
      },
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
    },
    screens: Object.entries(breakpoints).reduce((obj, [key, value]) => {
      return { ...obj, [key]: `${value}px` }
    }, {}),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
