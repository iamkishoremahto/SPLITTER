/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "StrongCyan":"hsl(172, 67%, 45%)",
      "Verydarkcyan":"#00474a",
      "Darkgrayishcyan":"hsl(186, 14%, 43%)",
      "Grayishcyan":"hsl(184, 14%, 56%)",
      "Lightgrayishcyan":"hsl(185, 41%, 84%)",
      "Verylightgrayishcyan":"hsl(189, 41%, 97%)",
      "White":"hsl(0, 0%, 100%)",
      "activeColor": "#9fe8df",
      "red":"#d93025",
      "inactiveGreen":"#0c666c"
    },

    fontFamily: {
      "spaceMono": ["Space Mono","monospace"]
    },
    extend: {},
  },
  plugins: [],
}

