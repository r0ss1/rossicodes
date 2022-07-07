// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '0%': '0%',
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#f9f9f9',
        'black': '#232b2b',
        'green': '#10b981',
        'pink': '#f000ff',
        'gray': '#e3e4e6',
        'pitch': '#0e1111',
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
      plugins: [],
    }
  }
}