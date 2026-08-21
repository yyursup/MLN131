/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fdfbf7',
          100: '#f6f2e8',
          200: '#efe6d5',
          300: '#e2d4bd',
          400: '#cbb694',
          500: '#af9368',
          800: '#3d3023',
          900: '#292017',
          950: '#19130d',
        }
      },
      fontFamily: {
        serif: ['Be Vietnam Pro', 'Georgia', 'serif'],
        display: ['Be Vietnam Pro', 'sans-serif'],
        sans: ['Be Vietnam Pro', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
