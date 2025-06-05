import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // configure: (proxy) => {
        // 添加日志来调试代理
        // proxy.on('proxyReq', (proxyReq, req) => {
        //   console.log('代理请求:', req.method, req.url, '->', proxyReq.path);
        // });
        // },
      },
    },
  },
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
