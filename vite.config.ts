import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Compute production base. Use explicit repo subpath to guarantee correct
  // asset URLs on GitHub Pages. If you prefer dynamic behavior, set VITE_BASE in CI.
  const repoName = "devatitech-refresh";
  const base = mode === "development" ? "/" : process.env.VITE_BASE ?? `/${repoName}/`;

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
