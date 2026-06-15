/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#05101E',
        blue: '#38BDF8',
        'blue-light': '#FFFFFF',
        steel: '#4A4A5A',
        red: '#38BDF8',
        offwhite: '#F0EDE8',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
