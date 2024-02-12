/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens:{
        xs:'480px'
       }

      // keyframes: {
      //   typing: {
      //     "0%": {
      //       width: "0%",
      //       visibility: "hidden"
      //     },
      //     "100%": {
      //       width: "100%"
      //     }
      //   },
      //   blink: {
      //     "50%": {
      //       borderColor: "transparent"
      //     },
      //     "100%": {
      //       borderColor: "white"
      //     }
      //   }
      // },
      // animation: {
      //   typing: "typing 2s steps(20) alternate, blink .7s "
      // }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

