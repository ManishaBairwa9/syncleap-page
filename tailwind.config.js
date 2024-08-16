/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#151934',
        'box-blue': '#252559',
        'bright-purple':'#1D1667',
        'bright-green':'#05FA00'
      },
      backgroundImage: {
        'sync-gradient': 'radial-gradient(57.58% 57.58% at 48.79% 42.42%, rgba(24, 180, 244, 0.5) 0%, rgba(46, 55, 114, 0) 63.22%)',
        'blue-gradient' : 'url("./images/Ellipse 1.png")'
      }
    },
  },
  plugins: [],
}

