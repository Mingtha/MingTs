import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    plugins: [
        monkey({
            entry: 'index.ts',
            userscript: {
                name: 'CR助手',
                namespace: 'MingTs',
                version: '1.0.0',
                description: 'codehub助手',
                author: 'mingda',
                include: ['/https?://.*example.com/.*/'],
                icon: 'https://raw.githubusercontent.com/primer/octicons/main/icons/rocket-16.svg',
                grant: 'none',
            },
        }),
    ],
});
