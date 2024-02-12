const plugin = require("tailwindcss/plugin")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "gray-25": "#FCFCFD",
      "gray-100": "#F2F4F7",
      "gray-300": "#D0D5DD",
      "gray-400": "#98A2B3",
      "gray-600": "#475467",
      "gray-800": "#1D2939",
      "gray-950": "#0C111D",
      "primary-25": "#F7FAFE",
      "primary-50": "#DEEBFF",
      "primary-100": "#7CA6FA",
      "primary-200": "#517DF0",
      "primary-300": "#3157DD",
      "primary-400": "#1632A6",
      "primary-500": "#15276F",
      "pink-25": "#FFF6FF",
      "pink-50": "#FFE8FE",
      "pink-100": "#FFC4FD",
      "pink-200": "#FF7EFA",
      "pink-300": "#FF3EF8",
      "pink-400": "#C400BD",
      "pink-500": "#540051",
      "mint-25": "#D8FAF5",
      "mint-50": "#BEF7EF",
      "mint-100": "#8EF9EA",
      "mint-200": "#58F8E1",
      "mint-300": "#02F1CF",
      "mint-400": "#0CDFC1",
      "mint-500": "#0FB49D",
      error: "#E1322D",
      positive: "008A3D",
      warning: "FA9200",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".shadow-main": {
          boxShadow: "0px 4px 18px 0px #4747F4",
        },
        ".shadow-drop": {
          boxShadow: "3px 4px 7.6px 0px rgba(0,0,0,0.15)",
        },
        ".shadow-blue": {
          boxShadow: "2px 3px 0px 0px #3157DD",
        },
        ".phone-size": {
          width: "360px",
          height: "800px",
        },
      })
    }),
    require("tailwindcss-animate"),
  ],
}
