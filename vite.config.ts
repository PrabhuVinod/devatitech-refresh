import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Compute a sensible base for production builds.
  // Priority: VITE_BASE env var (set by CI) -> repo name from GITHUB_REPOSITORY -> default literal
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? "devatitech-refresh";
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
