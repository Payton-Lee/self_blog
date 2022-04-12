// const colors = require('tailwindcss/colors')
// const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'class',
  theme: {
//     colors,
//     extend: {},
  },
//   plugins: [
//     require('tailwindcss-dark-mode')()
//   ],
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundColor: ['dark'],
    }
  }
}
