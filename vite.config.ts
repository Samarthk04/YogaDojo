import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.mov'],
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      manifest: {
        name: "Yoga Studio",
        short_name: "Yoga",
        theme_color: "#E7ECEB",
        background_color: "#FFFFFF",
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
