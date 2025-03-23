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
class MenusControler {
    MostrarMenu(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                let arrayMenu = yield conexionSQL.Ejecutar("call spMenusMostrar (?)");
                let newArrayMenu = [];
                for (const padre of arrayMenu.data.Table0) {
                    if (padre.TablaPadre == true) {
                        let menuPadre = padre;
                        let menuHijos = [];
                        for (const hijos of arrayMenu.data.Table0) {
                            hijos.asignado = false;
                            if (hijos.IdMenu === padre.Id) {
                                menuHijos.push(hijos);
                            }
                        }
                        ;
                        menuPadre.hijos = menuHijos;
                        newArrayMenu.push(menuPadre);
                    }
                    ;
                }
                ;
                return (0, classes_1.exitoMensaje)(newArrayMenu);
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al mostrar los menus");
            }
        });
    }
    NuevoMenu(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.idMenu,
                        parametros.menu,
                        parametros.descripcion,
                        parametros.icono,
                        parametros.url,
                        parametros.tablaPadre,
                        parametros.usuario.Usuario,
                        parametros.estado,
                    ];
                }
                return conexionSQL.Ejecutar("call spMenuInsertar(?,?,?,?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al insertar el menu");
            }
        });
    }
    ActualizarMenu(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.idMenu,
                        parametros.menu,
                        parametros.descripcion,
                        parametros.icono,
                        parametros.url,
                        parametros.tablaPadre,
                        parametros.usuario.Usuario,
                        parametros.estado,
                    ];
                }
                return conexionSQL.Ejecutar("call spMenuInsertar(?,?,?,?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al actualizar el menu");
            }
        });
    }
    EliminarMenu(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "ymunoz";
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario.Usuario,];
                }
                return yield conexionSQL.Ejecutar("call spMenusEliminar (?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al deshabilitar el menu");
            }
        });
    }
}
exports.default = MenusControler;
