/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: {
          100: "#E8995A",
          150: "#A66421",
          200: "#E9956C",
          250: "#AE613B",
          300: "#EA8F82",
          350: "#AA5A47",
          400: "#EB8B94",
          450: "#AC5658",
          500: "#EB87A5",
          550: "#AD5268",
          600: "#EA81B6",
          650: "#AE4D78",
        },
      },
    },
  },
  plugins: [],
};
