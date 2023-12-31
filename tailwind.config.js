/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            "./public/index.html"],
  theme: {
    screens: {
      'phone': '340px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

