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
const classes_1 = require("../../classes/classes");
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
class TipoIdentificacionController {
    mostrarTipoIdentificacion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spTipoIdentificacionMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al mostrar el tipo de identificación");
            }
        });
    }
    insertarTipoIdentificacion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
			parametros.id, 
			parametros.tipoIdentificacion, 
			parametros.usuario.Usuario, 
			(parametros.idEstado === '') ? 1 : parametros.idEstado];
                }
                return yield conexionSQL.Ejecutar("call spTipoIdentificacionInsertar(?, ?, ?, ?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al insertar el tipo de identificación");
            }
        });
    }
    actualizarTipoIdentificacion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.tipoIdentificacion, parametros.usuario.Usuario, parametros.idEstado];
                }
                return yield conexionSQL.Ejecutar("call spTipoIdentificacionInsertar(?, ?, ?, ?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al actualizar el tipo de identificación");
            }
        });
    }
    eliminarTipoIdentificacion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario.Usuario];
                }
                return yield conexionSQL.Ejecutar("call spTipoIdentificacionEliminar(?, ?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al eliminar el tipo de identificación");
            }
        });
    }
}
exports.default = TipoIdentificacionController;
