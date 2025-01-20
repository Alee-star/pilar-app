export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        select: "url(src/assets/arrow.svg)",
      },
    },
  },
  plugins: [],
};
