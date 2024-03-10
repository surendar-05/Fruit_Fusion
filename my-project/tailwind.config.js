module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel'],
        body: ['Poppins'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.menu': {
          '@apply text-slate-500 text-lg hover:bg-blue-500 px-4 py-2 rounded-full hover:text-white transform ease-in-out duration-200': '',
        },
        '.btnStyle': {
          '@apply font-body border-slate-300 py-3 px-16 rounded-full transform hover:scale-110 duration-100': '',
        },
        '.font-body': {
          // Define your font properties here
          fontFamily: 'Poppins', // Or whatever font you want to use
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
