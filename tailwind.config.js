/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/img/home/hero-img.jpg')",
      },
      colors: {
        'green-button': '#28a745',
        'green-dark': '#1a643d',
        'green-light': "#52c41a",
        'gray-light': '#f9f9f9',
        'border-color': '#dee2e6'
      },
      borderWidth: {
        'default': '1px'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};