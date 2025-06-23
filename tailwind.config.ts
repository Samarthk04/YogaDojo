import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage:   { 400: "#A3B18A" },
        beige:  { 100: "#F8F7F4" },
        charcoal:{ 800: "#2D2D2A" },
        
        // You can remove or keep this, as it will be replaced by 'accent'
        // rose:   { 300: "#F6BDC0" }, 

        // Add your new Golden Ochre accent color
        accent: "#EAA221",

        navbar: "#d7d5c9"
      },
      fontFamily: {
        heading: ["Elsie", "cursive"], 
        body:    ["EB Garamond", "serif"] 
      }
    }
  },
  plugins: []
};

export default config;