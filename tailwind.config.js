/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme: white page, near-black ink, light gray surfaces.
        ink: '#0d0c22',
        subtle: '#f8f8f9', // alternate section background
        surface: '#f3f3f4', // cards and image placeholders
        accent: {
          // Purple accent, darkened so small text passes 4.5:1 on white
          DEFAULT: '#6f4fde',
          light: '#8b73e6',
          dark: '#5b3fc4',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Unbounded', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'blob': 'blob 5s linear infinite',
        'marquee': 'marquee 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #8b73e6' },
          to: { boxShadow: '0 0 40px #8b5cf6, 0 0 80px #6366f1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
