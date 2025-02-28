/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        brighter: "colorShift 3s linear infinite",
      },
      keyframes: {
        colorShift: {
          "0%, 100%": { color: "#0BB742" },
          "50%": { color: "#ffffff" },
        },
      },
    },
  },
  plugins: [],
}