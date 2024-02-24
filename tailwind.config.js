import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'cmyk',
      {
        sunset: {
          ...themes['sunset'],
          primary: '#45aeee',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
        },
      },
    ],
    darkTheme: 'sunset',
  },
}
