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
const ContactoController_1 = __importDefault(require("../../Controller/Personas/ContactoController"));
const app = (0, express_1.Router)();
app.get("/contactos/:id", (req, res) => {
    let params = req.params;
    let contactos = new ContactoController_1.default();
    contactos.mostrarContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.post("/contactos/", (req, res) => {
    let params = req.body;
    let contactos = new ContactoController_1.default();
    contactos.insertarContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.put("/contactos/", (req, res) => {
    let params = req.body;
    let contactos = new ContactoController_1.default();
    contactos.actualizarContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.delete("/contactos/:id", (req, res) => {
    let params = req.params;
    let contactos = new ContactoController_1.default();
    contactos.eliminarContactos(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
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
