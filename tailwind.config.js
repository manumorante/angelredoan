module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },

        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        'fade-in-40': {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.4' },
        },

        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
