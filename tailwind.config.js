const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3066FF",
          500: "#3066FF",
        },
        yellow: {
          DEFAULT: "#F19937",
          500: "#F19937",
        },
        red: {
          DEFAULT: "#EA4E3D",
          500: "#EA4E3D",
        },
        green: {
          DEFAULT: "#67C23A",
          500: "#67C23A",
        },
        sky: {
          DEFAULT: "#55A6F8",
          500: "#55A6F8",
        },
        slate: {
          DEFAULT: "#64748B",
          500: "#64748B",
        },
        dark: {
          DEFAULT: "#1E293B",
          500: "#0F172A",
        },
      },
    },
  },
  safelist: [
    // add any background / text / border classes that you set at runtime
    'bg-amber-50/20',
    'bg-amber-50',
    'bg-light-blue-50/20',
    'bg-light-blue-50',
    'bg-indigo-50/20',
    'bg-indigo-50',
    'bg-gradient-to-t from-amber-50 to-amber-50/20',
    'bg-gradient-to-t from-orange-50 to-orange-50/20',
    'bg-gradient-to-t from-blue-50 to-blue-50/20',
    'bg-gradient-to-t from-light-blue-50 to-light-blue-50/20',
    'bg-gradient-to-t from-indigo-50 to-indigo-50/20',
  ],
  plugins: [],
});
