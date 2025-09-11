const config = {
  
  plugins: {
    "@tailwindcss/postcss": {},
  },

  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-128px * 7 - 1rem * 7))' },
        }
      }
    }
  }

};
export default config;