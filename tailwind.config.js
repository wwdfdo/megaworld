/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        preview: "url('/src/images/preview.png')",
        OpenPlatform: "url('/src/images/downtown.jpg')",
      },
    },
  },
  plugins: [],
};
