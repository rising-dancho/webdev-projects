import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';

// Get the current file and directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Export Vite configuration
export default defineConfig({
  plugins: [react()], // Use the React plugin with SWC compiler
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Alias for the src directory
    },
  },
  server: {
    port: 5173, // Development server port
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Proxy API requests to backend server
        changeOrigin: true, // Change the origin header to the target URL
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Rewrite the path
      },
    },
  },
});
