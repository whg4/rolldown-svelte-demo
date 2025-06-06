import { defineConfig } from "vite";
import { resolve } from 'node:path';
import { svelte } from '@sveltejs/vite-plugin-svelte';


// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],

  build: {
    rollupOptions: {
      input: {
        'vanilla-view': resolve(__dirname, 'vanilla-view/index.html'),
        'svelte-view': resolve(__dirname, 'svelte-view/index.html'),
      },
      output: {
        format: "umd",
      },
    },
  },
});
