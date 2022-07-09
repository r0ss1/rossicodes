// tailwind.config.js

module.exports = {
  linearBorderGradients: ({theme }) => ({
    colors: {
    },
    }),
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gotham: 'linear-gradient(to top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
        pinkcity: 'linear-gradient(to bottom, rgb(244 63 94), rgb(253 164 175))',
        
      },
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
        'green': '#03FDD2',
        'pink': '#fb7185',
        'gray': '#e3e4e6',
        'pitch': '#0e1111',
        'blue': '#30B8E1',
        'purple': '#8443FF',
        'darkgray': '#374151',
        'darkblack': '#111827',
        'pitchblack': '#000000',

      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
      plugins: [
        require('tailwindcss-border-gradient-radius'),
      ],
    }
  }
}