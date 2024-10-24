export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#31363c', // Egyedi sötétszürke szín
        customPurple: '#682c5d', // Egyedi lila szín
        customTealLight: '#29a98b', // Egyedi világos teal
        customTeal: '#20876f', // Egyedi teal
        customTealDark: '#186553', // Egyedi sötét teal
        customGreenBGDark: '#C4E7DF', // Sötétebb zöld háttér
        customGreen: {
          DEFAULT: '#D4EDE7',
          dark: '#BFE4DB',
          darker: '#88CAB2',
        },
        customPrimary: '#29a98b', // Az eredeti primary szín
        customSecondary: '#682c5d', // Az eredeti secondary szín
      },
    },
  },
  plugins: [],
};
