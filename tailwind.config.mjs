/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class strategy so we can toggle theme manually
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
