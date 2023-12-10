/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'Sblue': {
          100: '#F5F5F5',
          200: '#D3E1F6',
          300: '#B2CEF8',
          400: '#90BAF9',
          500: '#6EA6FA',
          600: '#4D93FC',
          700: '#2B7FFD'
        },
        'Sblack': {
          100: '#F5F5F5',
          200: '#CECECE',
          300: '#A7A7A7',
          400: '#808080',
          500: '#585858',
          600: '#313131',
          700: '#0A0A0A'
        }
      }
    },
  },
  plugins: [],
}

