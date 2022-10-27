/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./component/**/*.js"],
  theme: {
    extend: {
      colors: {
        gray1: "#171717",
      },
      backgroundImage: {
        BGgray: "url('/public/bg-gray.png')",
      },
    },
  },
  // daisyui: {
  //   themes: ["night"]
  // },
  // plugins: [require("daisyui")],
};
