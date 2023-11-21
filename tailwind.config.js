module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        darkPortfolioTheme2: {
          primary: "#718096", // Gray
          secondary: "#d53f8c", // Magenta
          accent: "#f6e05e", // Yellow
          neutral: "#2d3748", // Dark blue-gray
          "base-100": "#1a202c", // Very dark blue-gray
          info: "#4299e1", // Blue
          success: "#48bb78", // Green
          warning: "#f6ad55", // Orange
          error: "#f56565", // Red
        },
      },
    ],
  },

  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
