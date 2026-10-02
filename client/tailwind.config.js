/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      transitionDuration: {
        160: "160ms",
      },
    },
  },
  plugins: [
    require("daisyui"),
    "tailwind-scrollbar",
    // Hover solo en dispositivos con puntero preciso; evita hovers pegados en touch.
    plugin(({ addVariant }) => {
      addVariant(
        "hover-fine",
        "@media (hover: hover) and (pointer: fine) { &:hover }",
      );
      addVariant(
        "group-hover-fine",
        "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }",
      );
    }),
  ],
};
