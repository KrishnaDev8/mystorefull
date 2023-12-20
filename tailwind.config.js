/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#A24141',
        primaryLight: '#A28282',
        secondaryDark: '#303030',
        secondaryLight: '#E2E2E2',
        
      },
      fontSize: {
        'heading-1/h1': ['2.5rem', { fontWeight: '700' }],
        'heading-2/h1': ['1.8rem', { fontWeight: '700' }],
        'heading-3/h1': ['1.2rem', { fontWeight: '700' }],
        'body-1/b1': ['16px', { fontWeight: '800' }],
        'body-1/b3': ['16px', { fontWeight: '400' }],
        'body-2/b1': ['14px', { fontWeight: '800' }],
        'body-2/b3': ['14px', { fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
