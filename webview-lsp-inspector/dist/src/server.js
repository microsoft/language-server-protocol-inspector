"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
class WSServer {
    constructor(port) {
        this._server = new ws_1.Server({
            port
        });
        this._server.on('connection', conn => {
            console.log('connection established');
            conn.on('message', msg => {
                console.log(`<- ${msg}`);
            });
            conn.on('close', (code, reason) => {
                console.log(`connection closed with code ${code} and reason ${reason}`);
            });
        });
    }
}
exports.WSServer = WSServer;
//# sourceMappingURL=server.js.map