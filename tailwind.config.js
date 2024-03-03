import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'w-1',
    'w-2',
    'w-3',
    'w-4',
    'w-5',
    'w-6',
    'w-7',
    'w-8',
    'w-9',
    'w-10',
    'h-1',
    'h-2',
    'h-3',
    'h-4',
    'h-5',
    'h-6',
    'h-7',
    'h-8',
    'h-9',
    'h-10',
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',
    'gap-5',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'cmyk',
      {
        business: {
          ...themes['business'],
          primary: '#45aeee',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
        },
      },
    ],
    darkTheme: 'business',
  },
}
