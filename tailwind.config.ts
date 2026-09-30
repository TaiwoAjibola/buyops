import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['var(--font-jost)', 'sans-serif'],
        'secondary': ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#0F172A',
        'brand-navy': '#0B1220',
        'brand-blue': '#2563EB',
        'brand-blue-dark': '#1D4ED8',
        'brand-teal': '#0D9488',
        'brand-green': '#10B981',
        'brand-indigo': '#4338CA',
        'brand-gray': '#64748B',
        'brand-light': '#F8FAFC',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 23, 42, 0.15)',
        card: '0 4px 20px -8px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
