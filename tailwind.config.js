/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  darkMode:'class',
  theme: {
    extend: {
      colors: {
         primary:'#076AE1',
        secondary:'#86888B',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')

  ],
}

