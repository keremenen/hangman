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
      colors: {
        'dark-navy': '#261676',
        'blue': '#2463ff',
        'violet': '#887DC0'
      },
      backgroundImage: {
        'heading-blue-gradient': 'linear-gradient(180deg, #67B6FF, #FFFFFF)',
        'mobile-background': "url('./src/assets/images/background-mobile.svg')",
        'pink-gradient': `linear-gradient(#fe71fe, #2462ff)`,
      },
      boxShadow: {
        'primary':'inset 0 -2px 0 3px #140e66, inset 0px 1px 0 6px #3c74ff ',
        'secondary': ' inset 0 -2px 0 3px #140E66,  inset 0 1px 0 6px #C642FB ',
      },
      //
    },
  },
  plugins: [],
}