import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/login": {
        target: "https://jsonplaceholder.typicode.com/todos/1",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => {
          console.log("here is the path", path);
          return 'https://jsonplaceholder.typicode.com/todos/1'
        },
      },
    },
  },
});
