import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base = repo name, so the build works on GitHub Pages (cubillowork.github.io/flux-installer-prototype/)
export default defineConfig({
  plugins: [react()],
  base: '/flux-installer-prototype/',
})
