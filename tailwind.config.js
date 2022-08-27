/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'darck-c-2': "#343434",
      'darck-c-1' : "#8E8B82",
      'white-c': "#F3F3F3",
      'dead-c': "#DCDCD9",
      'hover-c': "#E9DCBE",
      'clicked-c': "#F1D28B"


    },
  },
  plugins: [],
}
