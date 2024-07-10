/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "main-cyan": "#00fff5",
        "main-cyan-hover": "#00adb5",
        "bg-dark": "#222831",
        "bg-dark-hover-alt": "#393e46",
        "bg-dark-hover": "#5b5e67",
      },
    },
  },
  plugins: [],
};
