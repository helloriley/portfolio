import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://helloriley-portfolio.github.io",
  base: "/",    // Note: adjust navbar routes if this changes!
  //base: "/astro-launch-ui/",
});
