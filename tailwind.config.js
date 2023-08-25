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
      'button-background': '#262626',
      'border': '#464646',
      'transparent': 'transparent',
    },
    screens: {
      'phone': '480px',
      'tablet': '768px',
      'desktop-sm': '990px',
      'desktop-md': '1280px',
      'desktop-lg': '1440px',
      'wide': '1920px',
    },
    extend: {},
  },
  plugins: [],
}

