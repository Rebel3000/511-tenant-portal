/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        citrus: {
          DEFAULT: '#F97316',
          dark: '#C2410C',
          light: '#FFEDD5',
        },
        greens: {
          DEFAULT: '#16A34A',
          dark: '#15803D',
          light: '#DCFCE7',
        },
        berry: {
          DEFAULT: '#DB2777',
          light: '#FCE7F3',
        },
        cream: '#FFFBF5',
        ink: {
          DEFAULT: '#1C1917',
          soft: '#57534E',
          faint: '#78716C',
        },
        line: '#F1E4D8',
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(28,25,23,0.06), 0 12px 28px rgba(28,25,23,0.08)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-16px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
