/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/**/*.{js,jsx,ts,tsx}', './.storybook/preview.js'],
  theme: {
    extend: {},
  },
  presets: [require('nativewind/preset')],
  plugins: [],
};
