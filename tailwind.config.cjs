/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        // main palette
        primary: "#0B0B0B",     // negro profundo
        secondary: "#9CA3AF",   // gris elegante
        accent: "#D4AF37",      // dorado moderno
        "accent-light": "#F5E6A8",

        // backgrounds
        "black-100": "#121212",
        "black-200": "#1A1A1A",

        // text
        "white-100": "#F3F3F3",
      },

      boxShadow: {
        card: "0px 35px 120px -15px rgba(212,175,55,0.15)",
      },

      screens: {
        xs: "450px",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/ui/background.jpg')",
      },
    },
  },

  plugins: [],
};