/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        shakeit: {
          '0%, 100%': { transform: 'rotate(0deg)', transformOrigin: '50% 50%' },
          '10%': { transform: 'rotate(8deg)' },
          '20%,40%,60%': { transform: 'rotate(-10deg)' },
          '30%,50%,70%': { transform: 'rotate(10deg)' },
          '80%': { transform: 'rotate(-8deg)' },
          '90%': { transform: 'rotate(8deg)' }
        }
      },
      animation: {
        shakeit: 'shakeit 0.8s linear both'
      }
    }
  },
  plugins: []
}
