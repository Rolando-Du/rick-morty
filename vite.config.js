import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    proxy: {
      "/api/rickmorty": {
        target: "https://rickandmortyapi.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/rickmorty/, "/api"),
      },
    },
  },
});