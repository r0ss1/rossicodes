// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#D35EFF',
        },
        blue: {
          50: '#5E97FF',
        },
        green: {
          50: '#45FFAF',
        },
        yellow: {
          50: '#ffd479;',
        },
        grey: {
          50: '#1c1e24',
          100: '#d0d5df',
          200: '#282c34',
          300: '#57637c',
        },
      },
      variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
      plugins: [],
    }
  }
}