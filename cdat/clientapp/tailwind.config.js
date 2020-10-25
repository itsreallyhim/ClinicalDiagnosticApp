const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.vue"],

  variants: {},

  theme: {
    extend: {
      colors: {
        blue: "#0069b5",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0,1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
