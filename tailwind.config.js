module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      0: 0,
      1: 1,
      auto: "auto",
    },
    height: {
      sm: "8px",
      md: "500px",
      lg: "24px",
      xl: "48px",
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
