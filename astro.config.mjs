import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],

  site: "https://helloriley.github.io",
  // Note: adjust nav, links and images if this changes!
  base: "/portfolio",

});