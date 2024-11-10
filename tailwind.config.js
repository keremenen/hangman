/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mouseMemoris: ["MouseMemoris", "sans-serif"],
      },
      colors: {
        "dark-navy": "#261676",
        blue: "#2463ff",
        violet: "#887DC0",
      },
      fontSize: {
        "heading-xl": [
          "7.5rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.005em",
          },
        ],
        "heading-l": [
          "5.5rem",
          {
            lineHeight: "120%",
            letterSpacing: "0em",
          },
        ],
        "heading-m": [
          "3rem",
          {
            lineHeight: "120%",
            letterSpacing: "0.05em",
          },
        ],
        "heading-s": [
          "2rem",
          {
            lineHeight: "120%",
            letterSpacing: "0.05em",
          },
        ],
        body: [
          "1.625rem",
          {
            lineHeight: "120%",
            letterSpacing: "0.15em",
          },
        ],
      },
      backgroundImage: {
        "heading-blue-gradient": "linear-gradient(180deg, #67B6FF, #FFFFFF)",
        "mobile-background": "url('/images/background-mobile.svg')",
        "tablet-background": "url('/images/background-tablet.svg')",
        "desktop-background": "url('/images/background-desktop.svg')",
        "pink-gradient": `linear-gradient(#fe71fe, #7199FF)`,
        "secondary-pink-gradient": `linear-gradient(#FF95FF, #7199FF)`,
        "blue-gradient": `linear-gradient(#344abae6, #001479e6)`,
      },
      boxShadow: {
        "primary-box": "inset 0 -8px 0 0px #140e66, inset 0 6px 0 0px #2463FF",
        "primary-button":
          "inset 0 -2px 0 3px #140E66, inset 0 1px 0 6px #3C74FF",
        "secondary-button":
          "inset 0px -2px 0 3px #140E66, inset 0 1px 0 6px #C642FB",
      },
      dropShadow: {
        primary: "innet 2px 4px 0px #243041",
      },
      //
    },
  },
  plugins: [],
};
