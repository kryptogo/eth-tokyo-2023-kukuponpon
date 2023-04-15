/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cartoon: ['"M PLUS Rounded 1c"', "sans-serif"],
      },
      colors: {
        primary: "#73D252",
      },
      backgroundImage: {
        anime: "url('/images/anime.png')",
      },
      boxShadow: {
        primary: "0px 1px 35px -13px #93EF74",
      },
    },
  },
  plugins: [],
};
