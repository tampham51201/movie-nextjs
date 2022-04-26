module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "10px 0px 35px 35px black",
        "4xl": "0 -5px 25px 30px black",
      },
    },
    colors: {
      transparent: "transparent",
      white: "white",
      text_gray: "#d4d4d4",
      primary: "#ff1e56",
      secondary: "#ed1e24",
      black: "black",
      black_opacity: "rgba(238,238,238,0.8)",
      bg_black: "#0c0c0c",
      current: "currentColor",
      box_shadow: "0 4px 15px rgb(0 0 0 / 50%)",
    },
  },
  plugins: [],
};
