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
class PersonasController {
    PersonasMostrar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [parametros.id];
                }
                return conexionSQL.Ejecutar("call spPersonasMostrar(?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al mostrar la persona");
            }
        });
    }
    PersonasInsertar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.primerNombre,
                        parametros.segundoNombre,
                        parametros.primerApellido,
                        parametros.segundoApellido,
                        parametros.nombreOrganizacion,
                        parametros.idTipoIdentificacion,
                        parametros.identificacion,
                        (parametros.fechaNacimiento === '') ? null : parametros.fechaNacimiento,
                        parametros.idDireccion,
                        parametros.idGenero,
                        parametros.usuario.Usuario,
                        (parametros.idEstado === '') ? 1 : parametros.idEstado
                    ];
                }
                return conexionSQL.Ejecutar("call spPersonasInsertar(?,?,?,?,?,?,?,?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al insertar la persona");
            }
        });
    }
    PersonasActualizar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                if (parametros) {
                    conexionSQL.parametros = [
                        parametros.id,
                        parametros.primerNombre,
                        parametros.segundoNombre,
                        parametros.primerApellido,
                        parametros.segundoApellido,
                        parametros.nombreOrganizacion,
                        parametros.idTipoIdentificacion,
                        parametros.identificacion,
                        (parametros.fechaNacimiento === '') ? null : parametros.fechaNacimiendo,
                        parametros.idDireccion,
                        parametros.idGenero,
                        parametros.usuario.Usuario,
                        parametros.idEstado,
                    ];
                }
                return conexionSQL.Ejecutar("call spPersonasInsertar(?,?,?,?,?,?,?,?,?,?,?,?,?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al actualizar la persona");
            }
        });
    }
    PersonasEliminar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSQL = new DbHelper_1.default();
                parametros.usuario = "admin";
                if (parametros) {
                    conexionSQL.parametros = [parametros.id, parametros.usuario];
                }
                return conexionSQL.Ejecutar("call spPersonasEliminar(?, ?)");
            }
            catch (error) {
                return (0, classes_1.errorMensaje)("Ocurrio un error al eliminar la persona");
            }
        });
    }
}
exports.default = PersonasController;
