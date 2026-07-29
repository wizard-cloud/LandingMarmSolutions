import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/LandingMarmSolutions/", // 👈 nombre EXACTO del repo en GitHub
});
