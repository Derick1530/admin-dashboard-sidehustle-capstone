module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#bcd2e8',
        'navy-blue': '#0a192f',
        'white': '#ccd6f6',
        'yellow': '#ffbf00'
      },
      margin: {
        'marg': '-12px',
      },
      width: {
        '100': '90%',
      }
    },
  },
  plugins: [require("daisyui")],
}
