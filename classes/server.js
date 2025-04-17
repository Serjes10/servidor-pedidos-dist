"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviorement_1 = require("../Global/enviorement");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const socket = __importStar(require("../sockets/sockets"));
const fs = require("fs");
const https = __importDefault(require("https"));
const privateKey = fs.readFileSync('/etc/letsencrypt/live/belleza-cr.com/privkey.pem');
const certificate = fs.readFileSync('/etc/letsencrypt/live/belleza-cr.com/fullchain.pem');
const credentials = { key: privateKey, cert: certificate };
//const credentials = {};

class Server {
    constructor() {
        this.app = (0, express_1.default)();
     
        this.port = enviorement_1.Server_Port;
        this.https = https.default.createServer(credentials, this.app);
        //this.httServer = new http_1.default.Server(this.app);
        this.io = (0, socket_io_1.default)(this.https);
        this.escucharSocket();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSocket() {
        this.io.on('connection', cliente => {
            //configurando usuario
            // socket.login(cliente, this.io);
            //Agregar a una sala el cliete
            socket.room(cliente, this.io);
            //Mensaje
            socket.mensaje(cliente, this.io);
            //Desconectar
            socket.desconectar(cliente);
        });
    }
    start(callback) {
	    //console.log(this.port);
        this.https.listen(this.port, callback);
        //this.httServer.listen(this.port, callback);
    }
}
exports.default = Server;
