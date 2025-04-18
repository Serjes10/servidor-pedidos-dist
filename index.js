

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const indexRoutes_1 = __importDefault(require("./Routes/indexRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path = __importDefault(require("path"));
const fs = require("fs");
const https = __importDefault(require("https"));

const server = server_1.default.instance;

//const privateKey = fs.readFileSync('/etc/letsencrypt/live/augajoapp.com/privkey.pem');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/augajoapp.com/fullchain.pem');
//const credentials = { key: privateKey, cert: certificate };
//const credentials = {};

//Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());

//Cors
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));

//Rutas
server.app.use('/api/dev', indexRoutes_1.default);
server.app.use("/public", express_1.default.static(path.default.join(__dirname, './public')));


//server.start(6000, () => {
//  console.log('Backend server running on https://yourdomain.com:5000');
//});

server.start(() => {
    console.log('Server Corriendo');
})
