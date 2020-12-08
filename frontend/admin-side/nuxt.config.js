export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  base:'/',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
      { rel: 'stylesheet', href: '/plugins/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/plugins/fontawesome/css/fontawesome.min.css' },
      { rel: 'stylesheet', href: '/plugins/fontawesome/css/all.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap-datetimepicker.min.css' },
      { rel: 'stylesheet', href: '/plugins/datatables/datatables.min.css' },
      { rel: 'stylesheet', href: '/css/animate.min.css' },
      { rel: 'stylesheet', href: '/css/select2.min.css' },
      { rel: 'stylesheet', href: '/css/admin.css' },
    ],
    script: [
      {
      }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/datetimepicker.js', ssr:false },
    { src: '~/plugins/Slim-Scroll.js', ssr:false },
    { src: '~/plugins/datatable.js', ssr:false },
    { src: '~/plugins/Select2.js', ssr:false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /**
     * add external plugins
     */
    plugins: [
    ],
  }
}
