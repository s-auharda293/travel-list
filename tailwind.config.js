/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        64: "10rem",
      },
      colors: {
        khaki: "#A99F96",
        roseTaupe: "#C8963E",
        grey: "#644b1f",
      },
    },
  },
  plugins: [],
};
