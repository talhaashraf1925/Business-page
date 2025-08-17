/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // for plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // for React/Vite
    "./resources/**/*.blade.php", // for Laravel Blade
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
