/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef1fc',
          100: '#dde3f9',
          200: '#bbc7f3',
          300: '#99abec',
          400: '#778fe6',
          500: '#5573e0',
          600: '#3E5AC1', // Byzantine Blue
          700: '#3248a3',
          800: '#263685',
          900: '#1844C6', // Violet Blue
          950: '#0d2267',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b9c9',
          400: '#8694ab',
          500: '#677590',
          600: '#525e77',
          700: '#434c61',
          800: '#3a4152',
          900: '#333946',
          950: '#21242c',
        },
        accent: {
          50: '#fef3e9',
          100: '#fde7d3',
          200: '#fbd0a7',
          300: '#f9b87b',
          400: '#f7a14f',
          500: '#F76C09', // Pumpkin
          600: '#E77D2E', // Safety Orange
          700: '#c25a07',
          800: '#9b4806',
          900: '#743604',
          950: '#3d1c02',
        },
        success: {
          50: '#eefdf5',
          100: '#d8faeb',
          200: '#b4f2d7',
          300: '#7de7b9',
          400: '#40d495',
          500: '#1fb978',
          600: '#149964',
          700: '#147a52',
          800: '#146144',
          900: '#13503a',
          950: '#052e20',
        },
        warning: {
          50: '#fefcec',
          100: '#fdf7cf',
          200: '#faeda0',
          300: '#f7de66',
          400: '#f3ca33',
          500: '#e5b020',
          600: '#cd8a16',
          700: '#a86416',
          800: '#8a4f18',
          900: '#724019',
          950: '#412109',
        },
        error: {
          50: '#fff3f1',
          100: '#ffe3e0',
          200: '#ffcac5',
          300: '#fea69d',
          400: '#fd7567',
          500: '#f54636',
          600: '#df2617',
          700: '#bb1a10',
          800: '#9b1a12',
          900: '#801b14',
          950: '#460908',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 3s ease-in-out infinite',
        'float-slower': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};