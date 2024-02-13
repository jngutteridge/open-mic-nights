/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        pull: 'pull .5s ease-out 1',
      },
      keyframes: {
        pull: {
          '0%': { transform: 'translateY(1rem)', opacity: '0', },
          '100%': { transform: 'translateY(0)', opacity: '1', },
        }
      }
    },
  },
  plugins: [],
}

