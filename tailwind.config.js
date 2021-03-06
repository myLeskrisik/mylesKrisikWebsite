const M = require("minimatch");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#434aa4",
        accent: "#00C895",
        accent2: "#CCC6FF",
        accent3: "#fffade",
        "accent3-dark": "#fff5bc",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
