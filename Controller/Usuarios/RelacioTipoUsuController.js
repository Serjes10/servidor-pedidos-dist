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
class RelacionTipoUsrController {
    // Mostrar  tipo de Metodos de pago
    mostrarRelacionTipoUsr(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spRelacionTipoUsrMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    // Insertar nuevo Metodo de pago
    nuevoRelacionTipoUsr(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.idTipoUsuario,
                        parametros.idMenu,
                        parametros.usuario.Usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spRelacionTipoUsrInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    //Actualizar el Metodo de pago
    actualizarRelacionTipoUsr(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.idMenu,
                        parametros.idTipoUsuario,
                        parametros.usuario.Usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spRelacionTipoUsrInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    //Elimina el Metodo dde pago
    EliminarRelacionTipoUsr(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "ymunoz";
                if (parametros) {
                    conexionSQL.parametros = [parametros.idTipoUsuario, parametros.idMenu];
                }
                return yield conexionSQL.Ejecutar("call spRelacionTipoUsrEliminar (?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    mostrarRelacionTipoUsrTipoUsuario(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.idTipoUsuario];
                }
                return yield conexionSQL.Ejecutar("call spRelacionTipoUsrMostrarTipoUsuario(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
}
exports.default = RelacionTipoUsrController;
