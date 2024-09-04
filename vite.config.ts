import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
    plugins: [
        react(),
        Pages({
            extensions: ['tsx'],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/query': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
