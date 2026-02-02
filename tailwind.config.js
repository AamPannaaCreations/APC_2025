// // tailwind.config.js
// const { fontFamily } = require('tailwindcss/defaultTheme')

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         bricolage: ['var(--font-bricolage-grotesque)', ...fontFamily.sans],
//       },
//     },
//   },
// }


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-128px * 7 - 1rem * 7))",
          },
        },
      },
    },
  },
  plugins: [],
};
