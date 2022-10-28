/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: {
          100: "#FF9B41",
          150: "#D37520",
          200: "#FF9358",
          250: "#D36E36",
          300: "#FF8973",
          350: "#D46550",
          400: "#FF8289",
          450: "#D45E65",
          500: "#FF7A9E",
          550: "#D45779",
          600: "#FF72B5",
          650: "#D4508F",
        },
      },
    },
  },
  plugins: [],
};
