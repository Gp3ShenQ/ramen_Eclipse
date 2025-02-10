import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  vite: {
    plugins: [tailwindcss()],
  },
  generate: {
    // 確保你的靜態資源的引用一致
    dir: 'dist',
  },
  // 添加這部分以統一資源路徑
  build: {
    publicPath: '/_nuxt/',
  },
})
