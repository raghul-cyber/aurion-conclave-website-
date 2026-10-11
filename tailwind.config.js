/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Warm Editorial Palette (Part D)
        warm: {
          bg: '#F3F1EB',
          secondary: '#EAE8E1',
          surface: '#FAF9F5',
          muted: '#DADBD4',
          graphite: '#282D2D',
          deep: '#191E1E',
          text: '#202524',
          textDark: '#F4F1E9',
          secondaryText: '#727975',
          amber: '#C39142',
          champagne: '#D9B874',
          teal: '#648E8B',
          border: 'rgba(40, 45, 45, 0.12)',
          borderDark: 'rgba(244, 241, 233, 0.12)',
        },
        // Deep contrast tokens for Agent Lab and tech visualizations
        surface: {
          DEFAULT: '#111516',
          elevated: '#151A1B',
          secondary: '#1B2021',
          border: 'rgba(243, 240, 232, 0.08)',
          hover: '#1E2426',
        },
        primary: {
          DEFAULT: '#F4F1E9',
          dark: '#202524',
          muted: '#727975',
        },
        accent: {
          DEFAULT: '#C39142',
          mid: '#D9B874',
          light: '#E5C27A',
          subtle: 'rgba(195, 145, 66, 0.12)',
        },
        tech: {
          teal: '#648E8B',
          tealSubtle: 'rgba(100, 142, 139, 0.12)',
        },
        alert: '#D6686C',
        success: '#68C498',
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'site': '1280px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
