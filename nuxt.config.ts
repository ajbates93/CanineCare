// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ 
    '@nuxtjs/tailwindcss',
    'nuxt-icon' 
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true, 
    injectPosition: 0,
    viewer: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
    head: {
      title: 'CanineCare'
    }
  }
})
