// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#ffd479;',
        },
        grey: {
          50: '#1c1e24',
          100: '#d0d5df',
        },
      },
      plugins: [],
    }
  }
}