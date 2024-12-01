/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/App.jsx",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: { // color object for defining colors for Tailwind-CSS
            primary: '#E76768', // Soft Red
            secondary: '#FAFAD2', // Light Yellow
            accent: '#FDFED5', // Pale Cream
            background: '#E1D9B8', // Beige
            surface: '#F3F4F6', // Neutral light surface
            text: '#2B2B2B', // Dark gray
          },
        },
      },
    plugins: [],
  };
