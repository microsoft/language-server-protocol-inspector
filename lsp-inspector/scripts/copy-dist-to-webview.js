#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')

const distPath = path.resolve(__dirname, '../dist')
const webviewDistPath = path.resolve(__dirname, '../../lsp-inspector-webview/dist/webview')

if (fs.existsSync(webviewDistPath)) {
  fs.removeSync(webviewDistPath)
}
fs.copySync(distPath, webviewDistPath)
