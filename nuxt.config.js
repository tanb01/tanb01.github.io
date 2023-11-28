import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Portfolio',
    title: 'Benjamin Tan',
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
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/i18n',
  ],

  ssr: false,

  i18n: {
    locales: [{
      code: 'en',
      file: 'en.js'
    },
    {
      code: 'es',
      file: 'es.js'
    },
    {
      code: 'fr',
      file: 'fr.js'
    }],
    lazy: true,
    langDir: '@/lang',
    skipNuxtState: true,
    defaultLocale: 'en',
    vue18n: {
      fallbackLocale: 'en',
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
    icons: 'mdi',
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.shades.black,
          accent: colors.purple.darken3,
          accent2: '#601d89',
          accentDarken: colors.deepPurple.base,
          secondary: colors.indigo.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          darken: colors.grey.darken4,
          complement: colors.shades.white
        },
        light: {
          primary: colors.shades.white,
          accent: colors.purple.darken3,
          accent2: '#601d89',
          accentDarken: colors.deepPurple.base,
          secondary: colors.indigo.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          darken: colors.grey.lighten3,
          complement: colors.shades.black
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: '#601d89',
    height: '5px'
  }
}
