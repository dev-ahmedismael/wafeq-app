/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#010046",
        secondary: "#E9E9E9",
        sidebarSec: "#010054",
        main: "#F2F5F7",
      },
      container: {
        padding: "1rem",
        center: true,
      },
    },
  },
};
