module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assess': '@/src',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
}