module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
//     colors: {
//       'rainy-mood': '#519ab1',
//       'vapor': '#effcff',
// },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        up: "up 3s forwards"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        up: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "100%": {
            transform: "translate(0px, -25px) scale(1)",
          },

        },
      },
    },

  },
  plugins: [],
}
