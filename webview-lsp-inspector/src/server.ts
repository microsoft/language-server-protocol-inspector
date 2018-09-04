import { Server } from 'ws'

export class WSServer {
  private _server: Server;

  constructor(port: number) {
    this._server = new Server({
      port 
    })
    this._server.on('connection', conn => {
      console.log('connection established')

      conn.on('message', msg => {
        console.log(`<- ${msg}`)
      })

      conn.on('close', (code, reason) => {
        console.log(`connection closed with code ${code} and reason ${reason}`)
      })
    })
  }
} 