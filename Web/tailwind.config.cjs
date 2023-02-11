/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imageError404': "url('./src/assets/erro404.png')"
      }
    },
  },
  plugins: [],
}
