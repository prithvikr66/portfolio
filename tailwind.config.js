/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px",
        contentContainer:"1140px",
        containerSmall:"1024px",
        containerxs:"768px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"


      },
      fontFamily:{
        bodyFont:["Montserrat","sans-serif"],
        titleFont:["Inter","sans-serif"]
      },
      boxShadow:{
        navbarShadow:"0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors:{
        bodyColor:"#0A192F",
        textGreen:"#64ffda",
        textBlue:"#007DF0",
        textLight:"#ccd6f6",
        textDark:"#8892b0",
        hoverColor:"#092332"
      }

    },
  },
  plugins: [],
}
