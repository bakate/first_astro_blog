import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--bakate-first-astro-blog.netlify.app/",
  integrations: [preact()]
});