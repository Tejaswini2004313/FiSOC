const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'whitesmoke' : '#f5f5f5',
        'bgcolor' : '#001C30',
        'blue' : '#88E1FF',
        'gray' : '#D9D9D9'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

