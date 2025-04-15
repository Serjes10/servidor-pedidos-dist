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
const server_1 = __importDefault(require("../../classes/server"));
class PedidosController {
    MostrarPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return yield conexionSQL.Ejecutar("call spPedidosMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    MostrarPedidoUsuario(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario.IdUsuario];
                }
                return yield conexionSQL.Ejecutar("call spPedidosMostrarUsuario(?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    NuevoPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const server = server_1.default.instance;
                let IdUsuario;
                if (parametros.IdUsuario != null) {
                    IdUsuario = parametros.IdUsuario;
                }
                else {
                    IdUsuario = parametros.usuario.IdUsuario;
                }
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.IdPedido,
                        parametros.IdTipoPedido,
                        parametros.IdMetodoPago,
                        parametros.IdReparto,
                        IdUsuario,
                        parametros.DetallePedido,
                        parametros.Observacion,
                        parametros.usuario.Usuario,
                        (parametros.idEstado === '') ? 1 : parametros.idEstado,
                        parametros.ObservacionCliente,
                        parametros.IdTipoIdentificacion,
                        parametros.Identificacion,
                        parametros.NombreCompleto,
                        parametros.Telefono,
                        parametros.Correo,
                        parametros.IdDistrito,
                        parametros.DireccionEntrega

                    ];
                }
                let respuesta = yield conexionSQL.Ejecutar("call spPedidosInsertar(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
                if (!respuesta.hasError) {
                    //Emitir evento al medico que reservaron
                    // console.log(reservation.data.Table0[0]);
                    server.io.emit('pedido', respuesta.data.Table0[0]);
                    //Emitir evento a la sala de todos los clientes moviles
                    // server.io.to('medicos').emit('reservacion', reservation.data.Table0[0]);
                }
                return respuesta;
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    ActualizarPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.IdPedido,
                        parametros.IdTipoPedido,
                        parametros.IdMetodoPago,
                        parametros.IdReparto,
                        parametros.IdUsuario,
                        parametros.DetallePedido,
                        parametros.Observacion,
                        parametros.usuario.Usuario,
                        parametros.idEstado,
                        null,
                        (parametros.IdTipoIdentificacion) ? parametros.IdTipoIdentificacion : null,
                        (parametros.Identificacion) ? parametros.Identificacion : null,
                        (parametros.NombreCompleto) ? parametros.NombreCompleto : null,
                        (parametros.Telefono) ? parametros.Telefono : null,
                        (parametros.Correo) ? parametros.Correo : null,
                        (parametros.IdDistrito) ? parametros.IdDistrito : null,
                        (parametros.DireccionEntrega) ? parametros.DireccionEntrega : null,
                    ];
                }
                return yield conexionSQL.Ejecutar("call spPedidosInsertar(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    EliminarPedido(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario.Usuario];
                }
                return yield conexionSQL.Ejecutar("call spPedidosEliminar(?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
    SeguimientoPedidos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                let respuesta = yield conexionSQL.Ejecutar("call spSeguimientoPedidosMostrar()");
                let arregloEstados = respuesta.data.Table0;
                for (let estadoProceso of arregloEstados) {
                    let data = [];
                    for (let pedido of respuesta.data.Table1) {
                        if (estadoProceso.EstadoProceso === pedido.EstadoProceso) {
                            data.push(pedido);
                        }
                        estadoProceso.pedidos = data;
                    }
                }
                return (0, classes_1.exitoMensaje)(arregloEstados);
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("");
            }
        });
    }
}
exports.default = PedidosController;
