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
        // Add inner shadow with position X: 0, Y: 0, blur: 0, spread: 6, color: #CFD8DC
        'custom': 'inset 0 4px 0 3px #3c74ff, 0 2px 0 3px #140e66'
      },
      //
    },
  },
  plugins: [],
}