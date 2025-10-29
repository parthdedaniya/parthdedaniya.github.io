// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt'
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Parth - Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Parth - Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.' },
        { name: 'keywords', content: 'Full-Stack Developer, Vue.js, Nuxt, NestJS, AWS, Frontend, Backend, Web Development' },
        { name: 'author', content: 'Parth' },
        { property: 'og:title', content: 'Parth - Full-Stack Developer' },
        { property: 'og:description', content: 'Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS. Building elegant UIs and scalable backend systems.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Parth - Full-Stack Developer' },
        { name: 'twitter:description', content: 'Full-Stack Developer specializing in Vue.js, Nuxt, NestJS, and AWS.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }
      ]
    }
  }
})