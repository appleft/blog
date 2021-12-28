module.exports = {
 content: [
   	'./_includes/*.html',
   	'./_includes/**/*.html',
   	'./_layouts/*.html',
   	'./_posts/*.md',
   	'./*.md',
    './*.html',
    ],
  theme: {
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
