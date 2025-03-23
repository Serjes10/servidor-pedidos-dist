"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = exports.mensaje = exports.desconectar = exports.usuariosConectado = void 0;
const usuarios_lista_1 = require("../classes/usuarios-lista");
exports.usuariosConectado = new usuarios_lista_1.UsuariosLista();
// export const conectarCliente = (cliente: Socket) => {
//     const usuario = new Usuario(cliente.id);
//     usuariosConectado.agregar(usuario);
// };
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        exports.usuariosConectado.borrarUsuario(cliente.id);
    });
};
exports.desconectar = desconectar;
//Escuchar Mensajes
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
//Agregar a sala
const room = (cliente, io) => {
    cliente.on('room', (payload) => {
        cliente.join(payload.room);
    });
};
exports.room = room;
