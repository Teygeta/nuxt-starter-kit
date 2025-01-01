import './env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['trpc-nuxt'],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
