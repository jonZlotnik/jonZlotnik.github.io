const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/hugo-twcss/layouts/**/*.html"
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