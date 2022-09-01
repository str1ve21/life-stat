/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: {
          100: "#FF9B41",
          200: "#FF9358",
          300: "#FF8973",
          400: "#FF8289",
          500: "#FF7A9E",
          600: "#FF72B5",
        },
      },
    },
  },
  plugins: [],
};
