/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        mist: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.25)",
      },
      backdropBlur: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};