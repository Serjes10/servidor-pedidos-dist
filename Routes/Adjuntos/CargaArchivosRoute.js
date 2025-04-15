"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../classes/Auth"));
const classes_1 = require("../../classes/classes");
var fileUpload = require('express-fileupload');
const app = (0, express_1.Router)();
const auth = new Auth_1.default();
app.use(fileUpload());
app.post("/cargarArchivos", (req, res) => {
    var archivo = req.files.archivo;
    var nombre = archivo.name.substring(0, archivo.name.indexOf('.'));
    var nombreCortado = archivo.name.split('.');
    var extensionArchivo = nombreCortado[nombreCortado.length - 1];
    // Sólo estas extensiones aceptamos
    var extensionesValidas = ['png', 'jpg', 'jpeg', 'heif'];
    if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extension no válida',
            errors: {
                message: 'Las extensiones válidas son ' + extensionesValidas.join(', ')
            }
        });
    }
    var nombreArchivo = `${nombre.trim()}-${new Date().getSeconds()}-${new Date().getMilliseconds()}.${extensionArchivo}`;
    // Mover el archivo del temporal a un path
    var path = `/home/ubuntu/back-end-sagar/servidor-pedidos-dist/public/${nombreArchivo}`;
    archivo.mv(path, (err) => {
        if (err) {
		console.log(err);
            return res.status(400).json((0, classes_1.errorMensaje)('Ocurrio un error al cargar el archivo'));
        }
        else {
            return res.status(200).json((0, classes_1.exitoMensaje)({ url: `https://${req.headers.host}/public/${nombreArchivo}`, }));
        }
    });
});
exports.default = app;
