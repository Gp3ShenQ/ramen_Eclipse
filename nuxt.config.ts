import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],
  modules: ['@pinia/nuxt', '@nuxt/image'],
  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
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
  image: {
    formats: ['png', 'jpg', 'webp'],
  },
})
