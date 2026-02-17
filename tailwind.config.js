/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#0A1628',
        'navy-light': '#1a2744',
        'navy-800': '#0f1d33',
        'tech-blue': '#0066CC',
        'tech-blue-light': '#3388DD',
        'aws-orange': '#FF9900',
        'gray-warm': '#F7F8FA',
        'terminal-teal': '#2DD4BF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
