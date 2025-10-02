module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0c10",
        purpleMagic: "#6a0dad",
      },
      backgroundImage: {
        stars: "url('/stars-bg.jpg')",
      },
    },
  },
  plugins: [],
}
