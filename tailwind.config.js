/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
<<<<<<< Updated upstream
    "./node_modules/flowbite/**/*.js",
=======
      "./node_modules/flowbite/**/*.js"
>>>>>>> Stashed changes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}