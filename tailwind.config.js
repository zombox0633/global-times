/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Oswald: ["Oswald", "sans-seri"],
      BebasNeue: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      colors: {
        night: "#121212",
        eerieBlack: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
