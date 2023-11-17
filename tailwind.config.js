/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            zilla: ["Zilla Slab", "serif"],
        },
        colors: {
            "yale": "#0D3B66",
            "verdigris": "#5BC0BE",
            "coquelicot": "#F34213",
            "reseda": "#657153",
            "linen": "#F9EBE0",
        },
      },
    },
    plugins: [],
  }