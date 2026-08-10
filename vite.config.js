import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/bus-trains-95/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        realtime: resolve(import.meta.dirname, "realtime.html"),
      },
    },
  },
});
