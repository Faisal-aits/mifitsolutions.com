/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Georgia', 'serif'],
      },
      colors: {
        bg: '#f8fafc',
        ink: '#0f172a',
        accent: '#2563eb',
      },
      boxShadow: {
        glow: '0 0 20px rgba(37, 99, 235, 0.4)',
      },
    },
  },
  plugins: [],
}
