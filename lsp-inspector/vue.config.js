const BASEURL = process.env.TARGET === 'lsp-website'
  ? '/language-server-protocol/inspector'
  : '/'

const OUTPUT_DIR = process.env.TARGET === 'lsp-website'
  ? 'dist'
  : '../lsp-inspector-webview/dist/src'

module.exports = {
  baseUrl: BASEURL,
  devServer: {
    overlay: false
  },
  productionSourceMap: false
}