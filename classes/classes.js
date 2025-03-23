"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitoMensaje = exports.errorMensajePersonalizado = exports.errorMensaje = void 0;
function errorMensaje(mensaje) {
    let respuesta = { data: [], errors: [{ mensaje }], hasError: true, refreshToken: '' };
    return respuesta;
}
exports.errorMensaje = errorMensaje;
function errorMensajePersonalizado(mensaje, criticidad = 1000) {
    if (criticidad === 1000) {
        mensaje = 'ocurrio un error interno, notifique al administrador';
    }
    let respuesta = { data: null, errors: [{ codigo: -1, descripcion: mensaje, criticidad }], hasError: true, refreshToken: '' };
}
exports.errorMensajePersonalizado = errorMensajePersonalizado;
function exitoMensaje(mensaje) {
    let respuesta = { data: mensaje, errors: [], hasError: false, refreshToken: '' };
    return respuesta;
}
exports.exitoMensaje = exitoMensaje;
