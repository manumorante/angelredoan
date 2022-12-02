module.exports = {
  content: ['./app/**/*.{js,jsx}', './ui/**/*.jsx'],
  theme: {
    extend: {
      transitionDuration: {
        200: '200ms',
        400: '400ms',
        2: '2s',
        3: '3s',
        4: '4s',
        5: '5s',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('children', '& *')
    },
  ],
}
