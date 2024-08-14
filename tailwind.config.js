import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} config */
const config = {
  content: {
    files: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {}, // Extend Tailwind's default colors
    },
  },
  plugins: [
    fluid
  ],
};

export default config;
