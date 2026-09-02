/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dim: '#1D4ED8',
          light: '#DBEAFE',
        },
        accent: {
          DEFAULT: '#EA580C',
          dim: '#C2410C',
          light: '#FFEDD5',
        },
        ink: {
          DEFAULT: '#1E293B',
          soft: '#475569',
          faint: '#64748B',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          card: '#FFFFFF',
          muted: '#E9EFF8',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.08), 0 20px 40px -12px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(30,41,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.06) 1px, transparent 1px)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
