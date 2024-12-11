/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      keyframes: {
        slideFromTop: {
          "0%": { transform: "translateY(-150%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "50%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "50%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
