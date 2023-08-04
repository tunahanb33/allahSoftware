/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-default': '#202632',
        'brand-text': 'rgb(173,179,184)'
      }
    },
  },
  plugins: [],
}

