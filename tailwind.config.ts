/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // أضفنا ألوان هوية QEC هنا
        qec: {
          brown: '#7A5B53',
          blue: '#4194C4',
          teal: '#6DC6C3',
          gray: '#949494',
        }
      }
    },
  },
  plugins: [],
}
