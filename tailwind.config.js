/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors:{
        white: '#f6f6f6',
        gray: '#e8e8e8',
        black: '#1b1b1b',
        dark_red: '#990100',
        red: '#b90504',
      }
    },
  },
  plugins: [],
}

