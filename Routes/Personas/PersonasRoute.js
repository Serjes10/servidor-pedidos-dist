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
const PersonasController_1 = __importDefault(require("../../Controller/Personas/PersonasController"));
const app = (0, express_1.Router)();
const auth = new Auth_1.default();
app.get("/personas/:id", (req, res) => {
    let params = req.params;
    let personas = new PersonasController_1.default();
    personas.PersonasMostrar(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.post("/personas/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let personas = new PersonasController_1.default();
    personas.PersonasInsertar(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.put("/personas/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let personas = new PersonasController_1.default();
    personas.PersonasActualizar(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
        let result = resultado;
        if (!result.hasError) {
            res.status(200).send(result);
        }
        else {
            res.status(400).send(result);
        }
    }));
});
app.delete("/personas/:id", auth.verificarToken, (req, res) => {
    let params = req.params;
    let personas = new PersonasController_1.default();
    personas.PersonasEliminar(params).then((resultado) => __awaiter(void 0, void 0, void 0, function* () {
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
