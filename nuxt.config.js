export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  vue: {
    config: {
      productionTip: true,
      devtools: 'eval-cheap-module-source-map'
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'onboarding',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~css/md.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/prism',
    '~/plugins/markdownit'
    // "~/plugins/vue-dompurify"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios/',
    '@nuxtjs/markdownit'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
  },

  serverMiddleware: [
    // '~/api/index.js'
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // 'markdown-it-div',
      // 'markdown-it-attrs'
    ]
  }
}
