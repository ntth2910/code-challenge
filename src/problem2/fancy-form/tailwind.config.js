/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBrown: "#8B4513",
        secondaryBrown: "#A0522D",
        lightBrown: "#D2B48C",
      },
    },
  },
  plugins: [],
};
