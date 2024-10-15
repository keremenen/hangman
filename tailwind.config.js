/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mouseMemoris: ['Mouse-Memoirs', 'cursive'],
      },
      backgroundImage: {
        'mobile-background': "url('./src/assets/images/background-mobile.svg')"
      }
    },
  },
  plugins: [],
}