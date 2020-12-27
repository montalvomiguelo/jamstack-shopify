
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3b8070' },
  /*
  ** Global CSS
  */
  css: [
    'reset-css',
    '@/assets/variables.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    'cookie-universal-nuxt'
  ],
  /**
   * Apollo configuration
   *
   */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://wb-barrel-store.myshopify.com/api/graphql',
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': '0b8dcd15ac5a03fadaf2ce5fe03e331d'
          }
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      preset: {
        // Change the postcss-preset-env settings
        state: 3,
        features: {
          'nesting-rules': true,
          'custom-properties': false
        },
        browsers: 'last 3 chrome versions, last 3 chromeandroid versions, last 3 firefox versions, last 3 opera versions, last 2 edge versions, safari >= 10, ios >= 10'
      }
    }
  },
  generate: {
    exclude: [/cart/]
  }
}
