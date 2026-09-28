import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        projeto: 'projeto.html',
        sobre: 'sobre.html',
        contato: 'contato.html',
        login: 'login.html',
        admin: 'admin.html'
      }
    }
  }
});
