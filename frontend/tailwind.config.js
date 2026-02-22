/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        primary: "#38bdf8",
        secondary: "#94a3b8",
      },
    },
  },
  plugins: [],
}
