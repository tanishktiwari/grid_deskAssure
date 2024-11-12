/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customcolor: '#C1F11D',  // No trailing comma here
        textcolor: '#141414',     // No trailing comma here
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // No trailing comma here
      },
      fontWeight: {
        extraLight: 200,  // No trailing comma here
        bold: 700,        // No trailing comma here
      },
    },
  },
  plugins: [],
}
