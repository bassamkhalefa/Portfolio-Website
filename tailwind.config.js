/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "../node_modules/flowbite"

  ],
  theme: {
    extend: {
      colors: {
        'main': "#31686E",
        'gray': "#404042"
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

