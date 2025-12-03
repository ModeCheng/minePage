/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED'
        },
        accent: {
          DEFAULT: '#22D3EE'
        }
      },
      backgroundImage: {
        gradientFlow: 'radial-gradient(120% 120% at 0% 0%, #0ea5e9 0%, transparent 60%), radial-gradient(120% 120% at 100% 0%, #a78bfa 0%, transparent 60%), radial-gradient(120% 120% at 100% 100%, #22d3ee 0%, transparent 60%), radial-gradient(120% 120% at 0% 100%, #fb7185 0%, transparent 60%)'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s ease-in-out infinite'
      }
    }
  },
  darkMode: 'class'
}
