import { defineConfig } from "vite";
import path from "node:path";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/javascript/App/"),
      timers: "rollup-plugin-node-polyfills/polyfills/timers",
    },
  },
  plugins: [react(), nodePolyfills()],
});
