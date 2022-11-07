import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      manifest: {
        lang: "ru",
        name: "LifeStat",
        short_name: "LifeStat",
        theme_color: "#FF9B43",
        background_color: "#171717",
        display: "standalone",
        orientation: "portrait",
        start_url: ".",
        icons: [
          {
            src: "src/assets/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "src/assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
