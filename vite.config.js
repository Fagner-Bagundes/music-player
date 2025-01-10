import { defineConfig } from "vite";

export default defineConfig({
    root: './src',
    base: '/music-player',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist'
    }
})