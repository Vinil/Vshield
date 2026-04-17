import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path: '/Vshield/' when served under GitHub Pages (vinil.github.io/Vshield),
// '/' everywhere else (local dev, Codespaces preview). We also respect an
// explicit VITE_BASE if you want to override at build time.
const base =
  process.env.VITE_BASE ??
  (process.env.GITHUB_PAGES === 'true' ? '/Vshield/' : '/');

export default defineConfig({
  base,
  plugins: [react()],
});
