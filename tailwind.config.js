// /tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092f57",
        brandBlue: "#33BAF0",
        brandBlueHover: "#63CCF4",
        bgSoft: "#f5f8fa",
      },
    },
  },
  plugins: [],
}