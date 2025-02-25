/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all your component files
    './src/**/*.css', // Includes custom CSS files
  ],
  safelist: [
    'grid-background', // Prevents this class from being purged
    'grid-with-lines', // Prevents this class from being purged
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
