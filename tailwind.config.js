/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Wade Ventures brand system — finite palette, do not extend.
        black: '#000000', // BACKGROUND — Deep Space Black
        surface: '#0A0A0A', // SURFACE — Elevated Surface
        white: '#FFFFFF', // TEXT — Pure White
        muted: '#808080', // MUTED — Graphite Gray
        venture: '#007AFF', // PRIMARY — Venture Blue
        border: '#E5E5E5', // BORDER — Soft Border
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '8px', // base-radius
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.1)', // subtle-card
      },
      transitionDuration: {
        DEFAULT: '300ms', // standard-fade
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out', // standard-fade
      },
      spacing: {
        section: '64px', // section-gap
      },
    },
  },
  plugins: [],
}
