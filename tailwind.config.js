/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        background: 'var(--bg-primary)',
        'background-secondary': 'var(--bg-secondary)',
      },
    },
  },
  plugins: [],
}