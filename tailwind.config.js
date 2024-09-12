/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
