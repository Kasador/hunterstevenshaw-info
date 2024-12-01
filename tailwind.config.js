/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/App.jsx",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: { // color object for define colors for tailwind-CSS
          light: { // light mode
            primary: '#C54A45',
            secondary: '#CCCCCC',
            accent: '#4F90FC',
            background: '#EDEDED',
            surface: '#F3F4F6',
            text: '#2B2B2B',
          },
          dark: { // dark mode
            primary: '#A43631',
            secondary: '#E4A5A5',
            accent: '#2563EB',
            background: '#1F2937',
            surface: '#374151',
            text: '#F9FAFB',
          },
        },
      },
    },
    plugins: [],
  };