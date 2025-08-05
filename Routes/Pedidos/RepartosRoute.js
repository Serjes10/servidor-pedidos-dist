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
const RepartosController_1 = __importDefault(require("../../Controller/Pedidos/RepartosController"));
const app = (0, express_1.Router)();
const Auth_1 = __importDefault(require("../../classes/Auth"));
const auth = new Auth_1.default();

app.get("/reparto/:id", auth.verificarToken, (req, res) => {
    let params = req.params;
    let Repartos = new RepartosController_1.default();
    Repartos.MostrarRepartos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(result);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post("/reparto/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let Repartos = new RepartosController_1.default();
    Repartos.NuevoReparto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(result);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.put("/reparto/", auth.verificarToken, (req, res) => {
    let params = req.body;
    let Repartos = new RepartosController_1.default();
    Repartos.ActualizarReparto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(result);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.delete("/reparto/:id", auth.verificarToken, (req, res) => {
    let params = req.params;
    let Repartos = new RepartosController_1.default();
    Repartos.EliminarReparto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(result);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
exports.default = app;
