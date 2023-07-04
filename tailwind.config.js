/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'primary': '#CAFF38',
      'secondary': '#D5FF61',
      'body-light': '#F0F0F0',
      'body-dark': '#1A1A1A',
      'body-gray-light': '#787878',
      'body-gray-dark': '#464646',
      'background': '#141414',
      'section-background': '#1A1A1A',
      'button-background': '#272727',
      'border': '#464646',
    },
    extend: {},
  },
  plugins: [],
}

