// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { loadEnv } from "vite";

const { URL } = loadEnv(
  process.env.URL ?? "http://localhost:4321",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        weights: [400, 600, 700],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },

  env: {
    schema: {
      URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  site: URL,
  integrations: [sitemap()],
});
