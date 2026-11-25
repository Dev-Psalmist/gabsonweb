import { readFileSync } from "node:fs";
import base44 from "@base44/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Every runtime dependency is bundled at startup, for the browser: one first imported
// mid-session makes Vite re-bundle and the page reloads.
const NOT_PREBUNDLED = new Set(["react", "react-dom", "@base44/vite-plugin", "@tanstack/react-start", "@tanstack/react-router", "@tanstack/react-router-ssr-query", "tailwindcss-animate"]);
const { dependencies } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const SDK_TRANSPORTS = ["partysocket", "socket.io-client"];
const PREBUNDLE = [...Object.keys(dependencies).filter((name) => !NOT_PREBUNDLED.has(name)), ...SDK_TRANSPORTS];

export default defineConfig({
  optimizeDeps: { include: PREBUNDLE },
  plugins: [
    base44(),
    // Static build with the pages prerendered to real HTML: no SSR worker, so the
    // site deploys to any static host (Vercel) unchanged.
    tanstackStart({ srcDirectory: "src", prerender: { enabled: true, crawlLinks: true } }),
    react(),
  ],
});
