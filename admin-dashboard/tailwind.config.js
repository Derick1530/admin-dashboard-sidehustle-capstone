module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#bcd2e8'
      },
      margin: {
        'marg': '-12px',
      }
    },
  },
  plugins: [require("daisyui")],
}
