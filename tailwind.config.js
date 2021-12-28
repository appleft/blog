module.exports = {
  mode: 'jit',
  content: [
    './_includes/*.html',
    './_layouts/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
