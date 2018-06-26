<p>
  <h2 align="center">Language Server Protocol Inspector</h2>
</p>
<p align="center">
  <a href="https://travis-ci.org/Microsoft/language-server-protocol-inspector.svg?branch=master">
    <img src="https://travis-ci.org/Microsoft/language-server-protocol-inspector.svg?branch=master">
  </a>
</p>

Try it at https://microsoft.github.io/language-server-protocol/inspector/.

## Motivation

When you are using [vscode-languageserver-node](https://github.com/Microsoft/vscode-languageserver-node) to develop a language server, it's possible to specify a setting `"[langId]".trace.server: "verbose"` to make the Language Client log the LSP communication. This log is useful for developing and testing the Language Server, but the log can be lengthy — 5 seconds of usage might generate 5000 lines LSP log. This makes it hard to gain insight from the logs.

This inspector visualizes the logs to make it easy to understand the communication between the Language Client / Server. It also lets you filter down the logs by search query or language features, so you can quickly identify the logs you are interested in.

![lsp-inspector](https://user-images.githubusercontent.com/4033249/41323525-ba73697a-6e63-11e8-92a3-c655b34126f6.gif)

## Usage

- A log file (log from html Language Server) is loaded by default.
- Click each LSP item to expand its parameters.
- Type a query into the search bar to filter the logs.
- Select a language feature area to filter the logs.
- Collect your own logs and inspect them! For example:
  - Set `css.trace.server: "verbose"` in VS Code.
  - Open a CSS file.
  - Copy everything inside `CSS Language Server` channel into a log file `css.log`.
  - Load it from the web app.
- You can try it on real-world logs file at `/tests/unit/logParser/fixture`.

## Running & Developing

- `yarn`
- `yarn serve`

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE) License.