/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentlight: 'rgb(var(--color-accent-light) / <alpha-value>)',
        accentdark: 'rgb(var(--color-accent-dark) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
