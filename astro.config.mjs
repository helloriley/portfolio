import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind()],

  site: "https://helloriley.github.io",
  // Note: adjust navbar routes if this changes!
  base: "/portfolio",

  adapter: node({
    mode: "standalone"
  })
});