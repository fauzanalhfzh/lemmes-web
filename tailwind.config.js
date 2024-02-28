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
        primary: '#044087',
        secondary:'#64748b',
        dark: '#0f172a',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')

  ],
}

