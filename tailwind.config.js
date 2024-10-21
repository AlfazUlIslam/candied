/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    colors: {
      darkPink: "#F95B5B",
      mediumDarkPink: "#EB6F89",
      mediumPink: "#FF7E7E",
      mediumLightPink: "#F78CA2",
      lightPink: "#FFEBEF",
      darkBrownishMaroon: "#3A0606",
      lightBrownishMaroon: "#6D0E22",
      footerPink: "#FFC3D0",
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      sail: "'Sail', system-ui"
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

