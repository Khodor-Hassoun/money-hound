/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ming: "#026A75",
        tangerine: "#F69983",
        beau: "#C8DAE4",
        offWhite: "#F2F2F2",
        tea: "#C2F8CB",
        mint: "#52B788",
        duneGold: "#FFBB21",
      },
      backgroundImage: {
        building:
          "url(/src/resources/images/seanpollockPhYq704ffdAunsplash.jpg)",
        arrow: "url(/src/resources/images/arrow-121-24.png)",
      },
    },
  },
  plugins: [],
};
