"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const DataHelper_1 = __importDefault(require("./DataHelper"));
const ConexionString_1 = __importDefault(require("./ConexionString"));
const mysql = __importStar(require("mysql"));
const conexion = require("../configuration/Conexiones.json");
class DbHelper {
    constructor(nombreConexion) {
        this.respuesta = new DataHelper_1.default();
        var c = this.fnAsignarConexion(nombreConexion);
        this.conexion = new ConexionString_1.default(c);
        this.parametros = [];
    }
    fnAsignarConexion(nombreConexion) {
        if (!nombreConexion) {
            nombreConexion = 'Default';
        }
        ;
        const r = this.buscarCadena(nombreConexion, conexion);
        if (!r.existe) {
            this.respuesta.hasError = true;
            this.respuesta.errors.push({ codigo: 1000, descripcion: "La conexion no existe", criticidad: 1000 });
        }
        return r.conexion;
    }
    buscarCadena(nombre, arreglo) {
        let datosRespuesta = { existe: false, conexion: null };
        arreglo.forEach((element) => {
            if (typeof element === 'object') {
                for (var propertyName in element) {
                    if (propertyName === nombre) {
                        datosRespuesta.existe = true;
                        datosRespuesta.conexion = element[propertyName];
                        break;
                    }
                }
            }
        });
        return datosRespuesta;
    }
    Ejecutar(procedimiento, parametros = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if (parametros.length === 0) {
                parametros = this.parametros;
            }
            let respuestaInicial = this.respuesta;
            let conexion = this.conexion;
            // console.log(conexion);
            //let coon = new sql.ConnectionPool(conexion);
            //sql.close();
            //coon.close();
            var promesa = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (respuestaInicial.existeError) {
                    respuestaInicial.existeError = true;
                    resolve(resolve);
                }
                // coon.connect();
                let connect = yield mysql.createConnection(conexion);
                connect.connect((err) => {
                    // connect.end();
                    //    console.log('error conection ', JSON.stringify(err));
                    if (err) {
                        connect.end();
                        var d = new DataHelper_1.default();
                        d.hasError = true;
                        // d.errors.push({ codigo: -1, descripcion: err.message, criticidad: 1000 })
                        d.errors.push({ codigo: -1, descripcion: 'No se pudo conectar a la base de datos', criticidad: 1000 });
                        resolve(d);
                    }
                });
                connect.query(procedimiento, parametros, (err, result) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        let criticidad;
                        let mensaje;
                        if ('sqlState' in err && (parseInt(err === null || err === void 0 ? void 0 : err.sqlState) === 45000)) {
                            criticidad = 2100;
                            mensaje = err === null || err === void 0 ? void 0 : err.sqlMessage;
                        }
                        else {
                            criticidad = 1000;
                            //mensaje=`${err?.code} - ${err?.sqlMessage}`;
                            mensaje = `${err === null || err === void 0 ? void 0 : err.sqlMessage}`;
                        }
                        connect.end();
                        var d = new DataHelper_1.default();
                        d.hasError = true;
                        d.errors.push({ codigo: -1, descripcion: mensaje, criticidad });
                        resolve(d);
                    }
                    else {
                        let res = yield this.recorrer(result);
                        resolve(res);
                        connect.end();
                    }
                }));
                connect.on('error', (err) => {
                    connect.end();
                    if (err) {
                        connect.end();
                        var d = new DataHelper_1.default();
                        d.hasError = true;
                        d.errors.push({ codigo: -1, descripcion: err.message, criticidad: 1000 });
                        resolve(d);
                    }
                });
            }));
            return promesa;
        });
    }
    recorrer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = new DataHelper_1.default(null);
            /* if (data.returnValue === 0) {
    
                var nombre = "";
    
                (data.recordsets).forEach((element: any, $index: number) => {
    
                    nombre = 'Table' + $index;
                    d.data;
                    d.data[nombre] = element;
    
                });
    
    
            } else {
    
                d.llenarErrores(data.recordsets[0]);
            } */
            var nombre = "";
            (data).forEach((element, $index) => {
                nombre = 'Table' + $index;
                d.data;
                d.data[nombre] = element;
            });
            return d;
        });
    }
}
exports.default = DbHelper;
