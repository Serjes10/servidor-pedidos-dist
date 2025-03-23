"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../classes/Auth"));
const TipoContactosController_1 = __importDefault(require("../../Controller/Personas/TipoContactosController"));
const app = (0, express_1.Router)();
const auth = new Auth_1.default();
app.get("/tiposContacto/:id", auth.verificarToken, (req, res) => {
    let params = req.params;
    let contactos = new TipoContactosController_1.default();
    params.usuario = req.body.usuario;
    contactos.mostrarTipoContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.post("/tiposContacto/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let contactos = new TipoContactosController_1.default();
    contactos.insertarTipoContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.put("/tiposContacto/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let contactos = new TipoContactosController_1.default();
    contactos.actualizarTipoContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.delete("/tiposContacto/:id", auth.verificarToken, (req, res) => {
    let params = req.params;
    let contactos = new TipoContactosController_1.default();
    params.usuario = req.body.usuario;
    contactos.eliminarTipoContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
exports.default = app;
