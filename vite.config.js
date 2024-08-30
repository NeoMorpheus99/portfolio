import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  watch: { usePolling: true },
  base: "/portfolio/",
  plugins: [react()],
});
