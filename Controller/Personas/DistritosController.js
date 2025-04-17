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
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
const { errorMensaje } = require('../../classes/classes.js');

class DistritosController {

    async mostrarDistritos() {
        try {
            let conexionSQL = new DbHelper_1.default();

            conexionSQL.parametros = [0];

            return await conexionSQL.Ejecutar("call spDistritosMostar(?)");
        }
        catch (error) {
            return errorMensaje("Ocurrio un error al mostrar los distritos");
        }
    }
}

exports.default = DistritosController;
