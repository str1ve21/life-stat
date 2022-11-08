import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev: boolean = command !== "build" ? true : false;

  return {
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
        includeAssets: [
          "logo.svg",
          "maskable_icon_x72.png",
          "maskable_icon_x96.png",
          "maskable_icon_x128.png",
          "maskable_icon_x192.png",
          "maskable_icon_x384.png",
          "maskable_icon_x512.png",
        ],
        devOptions: {
          enabled: isDev,
        },
        manifest: {
          lang: "ru",
          name: "LifeStat",
          short_name: "LifeStat",
          theme_color: "#171717",
          background_color: "#171717",
          display: "standalone",
          orientation: "portrait",
          start_url: ".",
          icons: [
            {
              src: "/maskable_icon_x72.png",
              sizes: "72x72",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/maskable_icon_x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/maskable_icon_x128.png",
              sizes: "128x128",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/maskable_icon_x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/maskable_icon_x384.png",
              sizes: "384x384",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/maskable_icon_x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
          ],
        },
        workbox: {
          sourcemap: true,
          globPatterns: ["**/*.{js,css,html,jpg,png,svg}"],
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
  };
});
