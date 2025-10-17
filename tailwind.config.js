import { defineConfig } from '@tailwindcss/node'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#004aad',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#ffcc00',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, #004aad 0%, #1e40af 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'button-gradient': 'linear-gradient(135deg, #ffcc00 0%, #f59e0b 100%)',
        'button-primary': 'linear-gradient(135deg, #004aad 0%, #1e40af 100%)',
        'button-secondary': 'linear-gradient(135deg, #ffcc00 0%, #f59e0b 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 74, 173, 0.1)',
        'medium': '0 4px 25px -5px rgba(0, 74, 173, 0.15)',
        'large': '0 10px 40px -10px rgba(0, 74, 173, 0.2)',
        'glow': '0 0 20px rgba(0, 74, 173, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});
