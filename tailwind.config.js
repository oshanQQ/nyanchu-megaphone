module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        "nyanchu-blue": "4B8EF2",
        "nyanchu-yellow": "FFF7CC",
      },
    },
  },
  plugins: [],
};
