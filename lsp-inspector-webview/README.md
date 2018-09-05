# LSP Inspector

This is a Webview extension based on the `/lsp-inspector` Vue app. It has an additional WebSocket server to allow any incoming connection to stream and visualize LSP logs.

## Usage

- Run command "LSP Inspector: Start LSP Inspector".
- Start stream JSON logs into the WebSocket server, specified in `lspInspector.port`.
- See more details at https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-log-streaming-sample

![stream](https://user-images.githubusercontent.com/4033249/45078686-7a22e600-b0a5-11e8-9c75-0d0dc3ec8256.gif)
