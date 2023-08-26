/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    screens: {
        'sm': '810px',
        // => @media (min-width: 640px) { ... }
  
        'md': '815px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1224px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    container: {
      center: true,
      padding: "1rem",
      
    },
    extend: {
      keyframes: {
        border: {
          '0%': { backgroundPosition: '0 0' },
          '50%': {  backgroundPosition:' 400% 0' },
          '100%': { backgroundPosition:' 0 0' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border":"border 20s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}