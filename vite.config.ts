import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    target: "esnext",
    lib: {
      fileName: "mod",
      formats: ["es"],
      entry: path.join(__dirname, "src/mod.ts"),
    },
  },
})
