/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        "google" : ["Google Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
