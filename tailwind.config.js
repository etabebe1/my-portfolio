/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake .3s infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(1px)" },
        },
      },
    },
  },
  plugins: [],
};
