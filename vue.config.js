module.exports = {
  lintOnSave: false,
  baseUrl: '/language-server-protocol/inspector',
  configureWebpack: {
    devServer: {
      overlay: false
    }
  }
}