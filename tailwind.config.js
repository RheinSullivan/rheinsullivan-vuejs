/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indexl.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        vueGreen: "#41B883",
        vueDark: "#35495E",
        vueGreen2: "#014526",
        dark: "#161b22",
        red: "#ff0000",
        maroon: "#730202",
      },
      backgroundImage: {
        Project1: "url('../assets/image/ImageProject/1.png')",
        Project2: "url('../assets/image/ImageProject/2.png')",
        Project3: "url('../assets/image/ImageProject/3.png')",
        Project4: "url('../assets/image/ImageProject/4.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
