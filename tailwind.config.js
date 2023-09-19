/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#31C3BD",
        lightBlueHover: "#65E9E4",
        lightBlueShadow: "#118C87",
        lightYellow: "#F2B137",
        lightYellowHover: "#FFC860",
        lightYellowShadow: "#CC8B13",
        darkNavy: "#1A2A33",
        semiDarkNavy: "#1F3641",
        darkNavyShadow: "#10212A",
        silver: "#A8BFC9",
        silverHover: "#DBE8ED",
        silverShadow: "#6B8997",
      },
      width: {
        w460: "460px",
        w412: "412px",
        w410: "410px",
        w327: "327px",
        w279: "279px",
        w226: "226px",
        w198: "195px",
        w132: "132px",
      },
      height: {
        h205: "205px",
        h72: "72px",
        h67: "67px",
        h56: "56px",
        h54: "54px",
        h52: "52px",
      },
      boxShadow: {
        DSMainButton: "0px -8px 0px 0px inset",
      },
      fontFamily: {
        outfit: "Outfit",
      },
    },
  },
  plugins: [],
};
