import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    screen :{  

'tablet': '640px',

'laptop': ' 1024px',


'desKtop' : '1280px'
    },
    
    
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/signup.jpg')",

      },
    },
  },
  plugins: [],
};
export default config;
