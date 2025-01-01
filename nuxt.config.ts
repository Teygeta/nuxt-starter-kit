import './env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  build: {
    transpile: ['trpc-nuxt'],
  },
  shadcn: {
    componentDir: './components/shadcn-ui',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
