import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["a148-2409-40e5-171-e1c-8dee-6f55-86b0-57e6.ngrok-free.app"],
  },
});
