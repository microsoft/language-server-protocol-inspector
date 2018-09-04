import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { Server } from 'ws'
import { WSServer } from './server'

export function activate(context: vscode.ExtensionContext) {
  let lspInspector: LSPInspector;

  context.subscriptions.push(
    vscode.commands.registerCommand('lspInspector.start', () => {
      lspInspector = new LSPInspector(context.extensionPath)
    })
  )
}

class LSPInspector {
  static viewType: 'lspInspector'

  private readonly _resourceRoot: string
  private _panel: vscode.WebviewPanel
  private _wsserver: Server

  constructor(extensionPath: string) {
    this._resourceRoot = path.join(extensionPath, 'dist/webview')
    this._panel = vscode.window.createWebviewPanel(LSPInspector.viewType, 'LSP Inspector', 2, {
      enableScripts: true,
      enableFindWidget: true,
      retainContextWhenHidden: true
    })
    this._setHTMLContent()

    const lspInspectorConfig = vscode.workspace.getConfiguration('lspInspector')

    this._wsserver = new Server({ port: lspInspectorConfig.get('port') })
    this._wsserver.on('connection', conn => {
      conn.on('message', msg => {
        this.message(msg.toString())
      })
    })
  }

  message(data: string) {
    this._panel.webview.postMessage(data)
  }

  private _setHTMLContent() {
    const htmlContentPath = path.resolve(this._resourceRoot, 'index.html')
    const htmlContent = fs.readFileSync(htmlContentPath, 'utf-8')
      .replace(/(href|src)=([^> ]*)/g, (_, attr, resourcePath) => {
        return `${attr}=${this.getResourceUri(resourcePath)}`
      })

    this._panel.webview.html = htmlContent
  }

  private getResourceUri(p: string) {
    return vscode.Uri.file(path.join(this._resourceRoot, p)).with({ scheme: 'vscode-resource' })
  }
}
