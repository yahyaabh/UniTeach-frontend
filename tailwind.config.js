/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'yellow': '#ffc300' ,
        'yellow-light' : "#ffd60a",
        'blue': '#001d3d' ,
        'blue-dark':'#000814' ,
        'blue-light': '#003566'

      }
    },
  },
  plugins: [],
}

