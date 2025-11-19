/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F3D91',
        secondary: '#1F7A6E',
        accent: '#FFB020',
        'neutral-dark': '#0B1220',
        'neutral-light': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '641px',
      lg: '1024px',
    },
  },
  plugins: [],
}
