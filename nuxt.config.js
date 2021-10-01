export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s — Тестовое задание для ivi',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Do not import actual styles. Use styleResources module only to import variables,
  // mixins, functions (et cetera) as they won't exist in the actual build
  styleResources: {
    scss: [
      '@/assets/scss/variables/**/*.scss',
      '@/assets/scss/mixins/**/*.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Path to the fallback HTML file: https://nuxtjs.org/docs/configuration-glossary/configuration-generate/#fallback
  generate: {
    fallback: true
  },

  // Development server host: https://nuxtjs.org/docs/features/configuration/#edit-host-and-port
  server: {
    host: '0.0.0.0' // default: localhost
  }
}
