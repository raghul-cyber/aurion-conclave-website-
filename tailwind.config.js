/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#060708',
          secondary: '#080A0B',
          tertiary: '#0C0F10',
        },
        surface: {
          DEFAULT: '#111516',
          elevated: '#151A1B',
          secondary: '#1B2021',
          border: 'rgba(243, 240, 232, 0.08)',
          hover: '#1E2426',
        },
        primary: {
          DEFAULT: '#F3F0E8',
          muted: '#969C99',
        },
        accent: {
          DEFAULT: '#C9943E',
          mid: '#D9AA55',
          light: '#E5C27A',
          subtle: 'rgba(201, 148, 62, 0.1)',
        },
        tech: {
          teal: '#76BFB9',
          tealSubtle: 'rgba(118, 191, 185, 0.1)',
        },
        alert: '#D6686C',
        success: '#68C498',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
