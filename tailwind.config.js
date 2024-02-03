const plugin = require("tailwindcss/plugin")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      gray: [
        { 25: "#FCFCFD" },
        { 100: "#F2F4F7" },
        { 300: "#98A2B3" },
        { 400: "#98A2B3" },
        { 600: "#475467" },
        { 800: "#1D2939" },
        { 950: "#0C111D" },
      ],
      primary: [
        { 25: "#F7FAFE" },
        { 50: "#DEEBFF" },
        { 100: "#7CA6FA" },
        { 200: "#517DF0" },
        { 300: "#3157DD" },
        { 400: "#1632A6" },
        { 500: "#15276F" },
      ],
      pink: [
        { 25: "#FFF6FF" },
        { 50: "#FFE8FE" },
        { 100: "#FFC4FD" },
        { 200: "#FF7EFA" },
        { 300: "#FF3EF8" },
        { 400: "#C400BD" },
        { 500: "#540051" },
      ],
      mint: [
        { 25: "#D8FAF5" },
        { 50: "#BEF7EF" },
        { 100: "#8EF9EA" },
        { 200: "#58F8E1" },
        { 300: "#02F1CF" },
        { 400: "#0CDFC1" },
        { 500: "#0FB49D" },
      ],
      sementic: [{ error: "#E1322D" }, { positive: "#008A3D" }, { warning: "#FA9200" }],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".h1": {
          fontSize: "1.875rem",
          fontWeight: 700,
        },
        ".h2": {
          fontSize: "1.625rem",
          fontWeight: 700,
        },
        ".t1": {
          fontSize: "1.125rem",
          fontWeight: 700,
        },
        ".t2": {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "1.5rem",
        },
        ".t3": {
          fontSize: "0.875rem",
          fontWeight: 600,
        },
        ".t4": {
          fontSize: "0.75rem",
          fontWeight: 400,
          lineHeight: "1.125rem",
        },
        ".t4-bold": {
          fontSize: "0.75rem",
          fontWeight: 700,
          lineHeight: "1.125rem",
        },
      })
    }),
    require("tailwindcss-animate"),
  ],
}
