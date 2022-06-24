const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    theme: {
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
        },

      },
      plugins: [
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/aspect-ratio'),
      ],
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `composables/**/*.{js,ts}`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`
    ]
}
