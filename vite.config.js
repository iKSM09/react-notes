import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
    polyfillModulePreload: true,
  },
  plugins: [react()],
});
