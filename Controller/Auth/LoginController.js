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
const Auth_1 = __importDefault(require("../../classes/Auth"));
const classes_1 = require("../../classes/classes");
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
class LoginController {
    Login(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                let auth = new Auth_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.usuario, parametros.clave];
                }
                let respuesta = yield conexionSQL.Ejecutar("call spLogueo(?,?)");
		
                let newArrayMenu = [];
                if (!respuesta.hasError) {
                    let token = auth.generateToken(respuesta.data.Table0[0]);
                    for (const padre of respuesta.data.Table1) {
                        if (padre.TablaPadre == true) {
                            let menuPadre = padre;
                            let menuHijos = [];
                            for (const hijos of respuesta.data.Table1) {
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
                    return (0, classes_1.exitoMensaje)({ token: token, menus: newArrayMenu });
                }
                return respuesta;
            }
            catch (error) {
                return (0, classes_1.errorMensajePersonalizado)("Ocurrio un error", 1000);
            }
        });
    }
}
exports.default = LoginController;
