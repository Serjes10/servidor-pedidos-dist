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
class MetodosPagoController {
    // Mostrar  tipo de Metodos de pago
    mostrarMetodosPago(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spMetodosPagoMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    // Insertar nuevo Metodo de pago
    nuevoMetodoPago(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.metodoPago,
                        parametros.descripcion,
                        parametros.usuario.Usuario,
                        (parametros.idEstado === '') ? 1 : parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spMetodosPagoInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    //Actualizar el Metodo de pago
    actualizarMetodoPago(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.metodoPago,
                        parametros.descripcion,
                        parametros.usuario.Usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spMetodosPagoInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    //Elimina el Metodo dde pago
    EliminarMetodoPago(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "admin";
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario];
                }
                return yield conexionSQL.Ejecutar("call spMetodosPagosEliminar (?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
}
exports.default = MetodosPagoController;
