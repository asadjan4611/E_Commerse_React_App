/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wobbles:{
          '50%':{
            'border-radius':'250px',
          }
        }
      }
    },
  },
  plugins: [],
}