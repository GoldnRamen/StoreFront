// tailwind.config.js
//Created this myself, kept getting:
//npm error could not determine executable to run
//npm error A complete log of this run can be found in: C:\Users\The Bald Baron\AppData\Local\npm-cache\_logs\2025-05-06T10_03_56_864Z-debug-0.log
//When you manually create this, make sure to restart npm run dev again
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'spin-fast': 'spin 0.5s linear infinite',
        },
      },
    },
    plugins: [],
  };
  
  