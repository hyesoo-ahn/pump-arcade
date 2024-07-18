// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       backgroundImage: {
//         // img1: "url('./src/images/img1.jpg')",
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/src/images/img1.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
