/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./stories/libraries/nativewind/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  presets: [require('nativewind/preset')],
  plugins: [],
};
