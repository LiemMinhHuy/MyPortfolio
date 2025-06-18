/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "#fec361",
        secondary: "#fff",
        third: "#333",
        fourth: "#282829",
        border: "#383838",
        fifth: '#2b2b2c',
        sixth: "rgba(63,63,63,0.6)",
        seventh: "rgba(63,63,63,1)",
      },
      colors: {
        primary: "#fec361",
        secondary: "#fff",
        third: "#333",
        fourth: "#282829",
        border: "#383838",
        fifth: '#d6d6d6b3',
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.25s ease forwards',
      },
    },
  },
  plugins: [],
};
