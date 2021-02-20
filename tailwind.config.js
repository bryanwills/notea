module.exports = {
  purge: ['./**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      cursor: {
        'col-resize': 'col-resize',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
