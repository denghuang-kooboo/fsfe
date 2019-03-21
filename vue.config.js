
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'store': path.resolve(__dirname, './src/store'),
        'components': path.resolve(__dirname, './src/components'),
        'assets': path.resolve(__dirname, './src/assets'),
        'views': path.resolve(__dirname, './src/views'),
        'utilities': path.resolve(__dirname, './src/utilities'),
        'assets': path.resolve(__dirname, './src/assets')
      }
    }
  }
}