"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode = require("vscode");
const ws_1 = require("ws");
function activate(context) {
    let lspInspector;
    context.subscriptions.push(vscode.commands.registerCommand('lspInspector.start', () => {
        lspInspector = new LSPInspector(context.extensionPath);
    }));
}
exports.activate = activate;
class LSPInspector {
    constructor(extensionPath) {
        this._resourceRoot = path.join(extensionPath, 'webview');
        this._panel = vscode.window.createWebviewPanel(LSPInspector.viewType, 'LSP Inspector', 2, {
            enableScripts: true,
            enableFindWidget: true,
            retainContextWhenHidden: true
        });
        this._setHTMLContent();
        const lspInspectorConfig = vscode.workspace.getConfiguration('lspInspector');
        this._wsserver = new ws_1.Server({ port: lspInspectorConfig.get('port') });
        this._wsserver.on('connection', conn => {
            conn.on('message', msg => {
                this.message(msg.toString());
            });
        });
    }
    message(data) {
        this._panel.webview.postMessage(data);
    }
    _setHTMLContent() {
        this._panel.webview.html = `
        <!DOCTYPE html>
        <html>
        
        <head>
          <meta charset=utf-8>
          <meta http-equiv=X-UA-Compatible content="IE=edge">
          <meta name=viewport content="width=device-width,initial-scale=1">

          <style>
            html, body {
              background: white;
            }
          </style>
          <link href=${this.getResourceUri('css/app.css')} rel=stylesheet>
          <link href=${this.getResourceUri('css/chunk-vendors.css')} rel=stylesheet>

          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src vscode-resource: https:; img-src vscode-resource: https:; script-src vscode-resource:; style-src * vscode-resource: 'unsafe-inline';">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">

          <title>LSP Inspector</title>
        </head>
        
        <body>
          <div id=app></div>
          <script src="${this.getResourceUri('js/chunk-vendors.js')}"></script>
          <script src="${this.getResourceUri('js/app.js')}"></script>
          <script src="${this.getResourceUri('js/vscode.js')}"></script>
        </body>
        
        </html>
        `;
    }
    getResourceUri(p) {
        return vscode.Uri.file(path.join(this._resourceRoot, p)).with({ scheme: 'vscode-resource' });
    }
}
//# sourceMappingURL=extension.js.map