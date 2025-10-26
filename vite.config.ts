import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Compute production base. Default to a relative base so built `dist/` is
  // portable and doesn't contain a hardcoded repo path. CI or callers may set
  // VITE_BASE to an explicit subpath when needed (e.g. GitHub Pages project sites).
  const base = mode === "development" ? "/" : process.env.VITE_BASE ?? "./";

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
