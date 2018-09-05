#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const htmlPath = path.resolve(__dirname, '../dist/index.html')
const content = fs.readFileSync(htmlPath, 'utf-8')

const beforeHeadClose = `
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src vscode-resource: https:; img-src vscode-resource: https:; script-src vscode-resource: 'unsafe-inline'; style-src * vscode-resource: 'unsafe-inline';">
`

const final = content.replace('</head>', `${beforeHeadClose}</head>`)

fs.writeFileSync(htmlPath, final)
