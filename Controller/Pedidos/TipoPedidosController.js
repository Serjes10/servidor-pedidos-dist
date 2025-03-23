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
class TipoPedidoController {
    // Mostrar nuevo tipo de pedido
    mostrarTipoPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spTipoPedidosMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    // Insertar nuevo tipo de pedido
    nuevoTipoPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.tipoPedido,
                        parametros.descripcion,
                        parametros.usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spTipoPedidosInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    actualizarPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.tipoPedido,
                        parametros.descripcion,
                        parametros.usuario,
                        parametros.idEstado,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spTipoPedidosInsertar(?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    eliminarPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "ymunoz";
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario];
                }
                return yield conexionSQL.Ejecutar("call spTipoPedidosEliminar(?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
}
exports.default = TipoPedidoController;
