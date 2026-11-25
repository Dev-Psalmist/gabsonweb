import { readFileSync } from "node:fs";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const NOT_PREBUNDLED = new Set(["react", "react-dom", "@tanstack/react-start", "@tanstack/react-router", "@tanstack/react-router-ssr-query", "tailwindcss-animate"]);
const { dependencies } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const SDK_TRANSPORTS = ["partysocket", "socket.io-client"];
const PREBUNDLE = [...Object.keys(dependencies).filter((name) => !NOT_PREBUNDLED.has(name)), ...SDK_TRANSPORTS];

export default defineConfig({
  optimizeDeps: { include: PREBUNDLE },
  plugins: [
    tanstackStart({ srcDirectory: "src", prerender: { enabled: true, crawlLinks: true } }),
    react(),
  ],
});
