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
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper")); //Metodos para llamar al procedimiento almacenado
const classes_1 = require("../../classes/classes");
class RepartosController {
    MostrarRepartos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spRepartosMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    NuevoReparto(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.Id,
                        parametros.NombreReparto,
                        parametros.Descripcion,
                        parametros.Telefono,
                        parametros.usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spRepartosInsertar(?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    ActualizarReparto(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.Id,
                        parametros.NombreReparto,
                        parametros.Descripcion,
                        parametros.Telefono,
                        parametros.usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spRepartosInsertar(?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    EliminarReparto(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "ymunoz";
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario];
                }
                return yield conexionSQL.Ejecutar("call spRepartosEliminar(?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
}
exports.default = RepartosController;
