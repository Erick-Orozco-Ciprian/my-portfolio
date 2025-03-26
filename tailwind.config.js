/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'custom-blue': '#1fb6ff',
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'), // Adds form styling utilities
];

