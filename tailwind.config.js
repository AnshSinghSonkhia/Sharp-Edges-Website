/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './404.html',
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-bl': 'slide-bl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-b': 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slow-bounce': 'bounce 2.5s infinite',
        'rotate-scale-down': 'rotate-scale-down 1.65s linear both infinite',
        'rotate-scale-down-2': 'rotate-scale-down 2.65s linear both infinite',
        'scale-up-center': 'scale-up-center 2.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both infinite',
        'scale-down-center': 'scale-up-center 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite',
        'tracking-in-expand': 'tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'tracking-in-contract-bck': 'tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite both',
      },
      spacing: {
        '90vw': '90vw',
      },
    },
  },
  plugins: [],
}