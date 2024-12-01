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
          light: { // light mode
            primary: '#E76768', // Soft Red
            secondary: '#FAFAD2', // Light Yellow
            accent: '#FDFED5', // Pale Cream
            background: '#E1D9B8', // Beige
            surface: '#F3F4F6', // Neutral light surface
            text: '#2B2B2B', // Dark gray
          },
          dark: { // dark mode
            primary: '#D66364', // Deeper Red
            secondary: '#E4A5A5', // Muted Pinkish
            accent: '#CCCCCC', // Gray
            background: '#1F2937', // Dark gray
            surface: '#374151', // Neutral dark surface
            text: '#F9FAFB', // Light gray for text
          },
        },
      },
    },
    plugins: [],
  };
