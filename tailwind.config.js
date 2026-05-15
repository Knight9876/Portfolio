module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4f46e5", // indigo-600
          dark: "#818cf8", // indigo-400
        },
        slate: {
          950: "#020617",
        }
      },
      boxShadow: {
        professional: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "professional-indigo": "0 10px 15px -3px rgba(79, 70, 229, 0.2)",
      },
    },
  },
  plugins: [],
};
