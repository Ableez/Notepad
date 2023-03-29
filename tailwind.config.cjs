/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        sidebarBg: "#eaebec",
        darkSidebarBg: "#1F1F1F",
        editorBg:"#ffffff",
        darkEditorBg:"#282828"
      },
    },
    theme: {
      blur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
