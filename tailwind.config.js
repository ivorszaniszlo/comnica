export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#31363c', // Custom dark gray color
        customPurple: '#682c5d', // Custom purple color
        customTealLight: '#29a98b', // Custom light teal color
        customTeal: '#20876f', // Custom teal color
        customTealDark: '#186553', // Custom dark teal color
        customGreenBGDark: '#C4E7DF', // Darker green background color
        customGreen: {
          DEFAULT: '#D4EDE7',
          dark: '#BFE4DB',
          darker: '#88CAB2',
        },
        customPrimary: '#29a98b', // Original primary color
        customSecondary: '#682c5d', // Original secondary color
      },
    },
  },
  plugins: [],
};
