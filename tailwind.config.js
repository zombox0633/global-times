/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Oswald: ["Oswald", "sans-seri"],
    },
    extend: {
      colors: {
        grayTen: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
