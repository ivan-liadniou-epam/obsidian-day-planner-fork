import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST,
      preprocess: [sveltePreprocess({ typescript: true })],
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["setup-vitest.js"],
  },
});
