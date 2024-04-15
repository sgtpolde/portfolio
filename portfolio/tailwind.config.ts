import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myportfolio: { // Name of your theme
          "primary": "#06b6d4",     // Cyan, used for primary button and highlights
          "primary-focus": "#0284c7", // Darker cyan for button focus states
          "primary-content": "#ffffff", // White text on primary colors

          "base-100": "#191924",   // Dark grey, used for the background
          "base-200": "#2a2e37",   // Slightly lighter grey, can be used for card backgrounds
          "base-content": "#ffffff", // White text on dark backgrounds

          "info": "#2563eb",       // Information blue, not used yet but can be used for info alerts
          "success": "#10b981",    // Success green, for success messages or indicators
          "warning": "#facc15",    // Warning yellow, for alerts or notices
          "error": "#ef4444",      // Error red, for error messages or indicators
        },
      },
    ],
  },
};
export default config;
