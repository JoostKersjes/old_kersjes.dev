const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      cyan: colors.cyan,
      gray: colors.coolGray,
      lime: colors.lime,
      pink: colors.pink,
      white: colors.white,
    },
    extend: {
      backgroundImage: {
        'hero': 'url("/svgbackgrounds.com.large-triangles.svg")',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
