#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const htmlPath = path.resolve(__dirname, '../dist/index.html')
const content = fs.readFileSync(htmlPath, 'utf-8')

const beforeHeadClose = `
<link rel="stylesheet" href="{{ "/css/bootswatch/cosmo/bootstrap.min.css" | prepend: site.baseurl }}">
<link rel="stylesheet" href="{{ "/css/fontawesome-all.min.css" | prepend: site.baseurl }}">
<link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.baseurl }}">
<link rel="shortcut icon" href="{{ "/img/favicon.png" | prepend: site.baseurl }}">
`

const final = content
  .replace('<!DOCTYPE html>', '---\n---\n\n<!DOCTYPE html>')
  .replace('</head>', `${beforeHeadClose}</head>`)
  .replace('<body>', '<body>\n{% include topnav.html %}\n')

fs.writeFileSync(htmlPath, final)
