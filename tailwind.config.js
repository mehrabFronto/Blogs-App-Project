/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      fontFamily: {
         sans: ["Vazirmatn"],
      },
      extend: {
         colors: {
            // primary: "#3b82f6",
            // secondary: "#e5e7eb",
            // bgColor: "#1e293b",
         },
      },
   },
   corePlugins: {
      aspectRatio: false,
   },
   plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
   ],
};
