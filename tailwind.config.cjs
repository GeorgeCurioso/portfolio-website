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
        primary: "#050816",     
        secondary: "#9CA3AF",  
        accent: "#c22f82",      
        "accent-light": "#F5E6A8",

        // backgrounds
        "black-100": "#100d25",
        "black-200": "#090325",

        // text
        "white-100": "#f3f3f3",
      },

      boxShadow: {
        card: "0px 35px 120px -15px rgba(194,47,130,0.20)",
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