"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    //Agregar un usuario
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log(this.lista);
    }
    //Obtener lista
    getLista() {
        return this.lista;
    }
    getUsuario(id) {
        return this.lista.find(usuario => usuario.id === id);
    }
    //Obtener lista sala en particular
    getUsuarioSala(sala) {
        return this.lista.filter(Usuario => Usuario.sala === sala);
    }
    //Borrrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(Usuario => Usuario.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;
