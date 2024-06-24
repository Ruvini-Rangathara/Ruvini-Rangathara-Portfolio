/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '300px',
      sm: '500px',
      md: '750px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#CBB89D',
        accent: '#00001A',
      },
      backgroundImage: {
        circleStar: 'url("/circle-star.svg")',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'xl': ['13px', '18px'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
};
