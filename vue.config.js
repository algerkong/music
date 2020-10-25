module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assess': '@/src',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'item': '@/components/common/item',
        'assets':'@/assets'
      }
    }
  },
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
}