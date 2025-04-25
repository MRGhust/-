/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460',
          dark: '#0a264a',
          light: '#1a5098'
        },
        accent: {
          DEFAULT: '#E94560',
          dark: '#d13a53',
          light: '#f06e84'
        }
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
