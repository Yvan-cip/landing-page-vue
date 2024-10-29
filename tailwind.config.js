/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2091F9',
        secondary: '#2DC071',
        secondary_o: '#F15B07',
        texte: '#252B42',
        second_text: '#374754',
        light_text: '#FFFFFF',
        dark_background: '#252B42',
        light_background: '#FFFFFF',
        background_gradient: '#222B32'
      },
    },
  },
  plugins: [],
}

