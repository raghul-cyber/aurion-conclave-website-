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
          DEFAULT: '#050607',
          secondary: '#070A0B',
          tertiary: '#0A0D0E',
        },
        surface: {
          DEFAULT: '#101415',
          elevated: '#14191A',
          border: '#1A2020',
          hover: '#202829',
        },
        primary: {
          DEFAULT: '#F4F1E8',
          muted: '#A5AAA7',
        },
        accent: {
          DEFAULT: '#D9A441',
          dark: '#C88A2A',
          light: '#F1C66B',
          glow: 'rgba(217, 164, 65, 0.15)',
        },
        tech: {
          cyan: '#61C7C0',
          cyanGlow: 'rgba(97, 199, 192, 0.15)',
        },
        alert: '#E56B6F',
        success: '#6FD2A5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
    },
  },
  plugins: [],
}
