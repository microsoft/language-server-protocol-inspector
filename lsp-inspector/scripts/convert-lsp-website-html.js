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

const afterBodyStart = `
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

<!-- MicroSoft cookie library -->
<script src="https://uhf.microsoft.com/mscc/statics/mscc-0.4.0.min.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-62780441-30"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
`

const final = content
  .replace('<!DOCTYPE html>', '---\n---\n\n<!DOCTYPE html>')
  .replace('</head>', `${beforeHeadClose}</head>`)
  .replace('<body>', `<body>\n${afterBodyStart}\n{% include topnav.html %}\n`)

fs.writeFileSync(htmlPath, final)
