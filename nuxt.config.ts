// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 5173,
  },
  imports: {
    dirs: ['types'],
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@vueuse/nuxt',
    "@nuxt/icon",
    "@nuxt/image"
  ],
  build: {
    transpile: ['vue-sonner'],
  },
  css: [
    '~/index.css',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: { classSuffix: '' },
  googleFonts: {
    families: {
      'Varela+Round': true,
      'Noto+Sans+SC': true,
    },
    prefetch: true,
    preconnect: true,
    preload: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        translate: 'no',
      },
      title: 'rtc',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'description', content: 'rtc' },
      ],
      script: [
        { src: 'https://webrtc.github.io/adapter/adapter-latest.js' },
      ],
    },
  },
});