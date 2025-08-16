import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fcc_drum_machine/', // 👈 This is critical for GitHub Pages
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});
