/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-900": "hsl(187, 24%, 22%)",
        "grey-500": "hsl(186, 15%, 59%)",
        "tropical-rain-forest": "hsl(169, 82%, 27%)",
        honeydew: "hsl(148, 38%, 91%)",
        "red-errors": "hsl(0, 66%, 54%)",
      },
    },
  },
  plugins: [],
};
