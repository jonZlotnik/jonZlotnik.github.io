const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/hugo-twcss/layouts/**/*.html",
  ],
  safelist: [
    // NO IDEA WHY, BUT I NEED THIS FOR THE NAVIGATION COLORS TO WORK.
    // I HATE FRONTEND SO MUCH.
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400'
  ],
  darkMode: 'media',
  theme: {
    fill: theme => ({
      current: 'currentColor',
      white: theme('colors.white'),
    }),
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: colors.stone['900'],
      gray: colors.neutral,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  variants: {
    logical: [
      'responsive',
      'hover'
    ],
  },
  plugins: [
    require('tailwindcss-logical'),
  ], // if we add forms, do it here
}