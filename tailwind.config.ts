import type { Config } from "tailwindcss";

const {colors : defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(243, 87%, 12%)",
      "200" : "hsl(238, 22%, 44%)",
      "300" : "hsl(224, 93%, 58%)",
      "400" : "hsl(170, 45%, 43%)",
      "500" : "hsl(240, 75%, 98%)",
      "600" : "hsl(0, 0%, 75%)"
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'desktop' : "url('/images/bg-curve-desktop.svg')"
      },
      colors : colors,
      fontFamily : {
        'raleway' : 'Raleway',
        'opensan':'Open Sans'
      }
    },
  },
  plugins: [],
};
export default config;
