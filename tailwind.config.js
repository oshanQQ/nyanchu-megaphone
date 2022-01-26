module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "nyanchu-blue": "#4B8EF2",
        "nyanchu-yellow": "#FFF7CC",
      },
    },
  },
  plugins: [],
};
