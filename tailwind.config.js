/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vw-dark': '#000000',
        'vw-card': '#111317',
        'vw-gray': '#969696',
        'vw-white': '#FFFFFF',
        'vw-light-gray': '#E3E3E3',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'title': ['80px', { lineHeight: '1.26' }],
        'app-name': ['32px', { lineHeight: '1.26' }],
        'category': ['28px', { lineHeight: '1.26' }],
        'description': ['24px', { lineHeight: '0.92' }],
      },
      borderRadius: {
        'app': '8px',
      },
    },
  },
  plugins: [],
}

