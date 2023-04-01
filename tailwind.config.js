// const { transform } = require('framer-motion')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  // plugins: [
  //   plugin(function ({ addComponents, }) {
  //     addComponents({
  //       '.card-container': {
  //         transition,
  //         transform: 1,
  //       },
  //       ".card-container.flipped": {
  //         transition,
  //         transform: rotateY(180),
  //       },
  //     })
  //   })
  // ]
}