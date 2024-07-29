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
        // secondary: '#111312',
        secondary: '#484544',
        // accent: '#00001A',
        accent: 'rgb(67 56 202)',
        indigo:'rgb(67 56 202)'
      },
      backgroundImage: {
        site: 'url("/assets/image/Reports.jpeg")',
        about: 'url("/assets/image/dp2.png")',
        contact: 'url("/assets/image/contact1.png")',
        profileRaveena: 'url(/assets/image/mrs_raveena.jpeg)',
        profileYasendra: 'url(/assets/image/mr_yasendra.jpeg)',
        profileDanuja: 'url(/assets/image/mr_danuja.jpeg)',
        profileSachini: 'url(/assets/image/miss_sachini.jpeg)',
        serviceBackend: 'url(/assets/image/backend-database.png)',
        serviceFrontend: 'url(/assets/image/frontend.png)',
        serviceOther: 'url(/assets/image/other-tech.png)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['14px', '18px'],
        'xl': ['17px', '20px'],
        'xxs': ['12px', '16px'],
        'vl': ['20px', '24px'],
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
