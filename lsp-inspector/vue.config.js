const BASEURL = process.env.TARGET === 'lsp-website'
  ? '/language-server-protocol/inspector'
  : '/'

module.exports = {
  baseUrl: BASEURL,
  devServer: {
    overlay: false
  },
  productionSourceMap: false
}