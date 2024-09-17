import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig((env) => {
  return {
    plugins: [react()],
    build: {
      target: 'es2015',
      sourcemap: env.mode === 'development' ? true : 'hidden',
    },
  }
})
