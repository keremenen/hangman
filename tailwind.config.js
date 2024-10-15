/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mouseMemoris: ['MouseMemoris', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-background': "url('./src/assets/images/background-mobile.svg')",
        'pink-gradient': `linear-gradient(#fe71fe, #2462ff);`
      },

      backgroundColor: {
      }
      
    },
  },
  plugins: [],
}