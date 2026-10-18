/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ky: {
          obsidian: '#09090B',
          charcoal: '#121215',
          slate: '#18181B',
          surface: '#FAFAFA',
          orange: '#EA580C',
          amber: '#F97316',
        }
      },
      animation: {
        'river-continuous': 'riverFlow 46s linear infinite',
      },
      keyframes: {
        riverFlow: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      }
    },
  },
  plugins: [],
};
