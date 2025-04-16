"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TipoContactosRoutes_1 = __importDefault(require("./Personas/TipoContactosRoutes"));
const GeneroRoute_1 = __importDefault(require("./Personas/GeneroRoute"));
const ContactosRoutes_1 = __importDefault(require("./Personas/ContactosRoutes"));
const TipoIdentificacionRoute_1 = __importDefault(require("./Personas/TipoIdentificacionRoute"));
const DepartamentoRoute_1 = __importDefault(require("./Personas/DepartamentoRoute"));
const MunicipioRoute_1 = __importDefault(require("./Personas/MunicipioRoute"));
const DireccionRoute_1 = __importDefault(require("./Personas/DireccionRoute"));
const PersonasRoute_1 = __importDefault(require("./Personas/PersonasRoute"));
const TipoPedidosRoute_1 = __importDefault(require("./Pedidos/TipoPedidosRoute"));
const MetodosPagoRoute_1 = __importDefault(require("./Pedidos/MetodosPagoRoute"));
const RepartosRoute_1 = __importDefault(require("./Pedidos/RepartosRoute"));
const EstadosRoute_1 = __importDefault(require("./Estados/EstadosRoute"));
const MenusRoute_1 = __importDefault(require("./Usuarios/MenusRoute"));
const TiposUsuarioRoute_1 = __importDefault(require("./Usuarios/TiposUsuarioRoute"));
const RelacionTipoUsrRoute_1 = __importDefault(require("./Usuarios/RelacionTipoUsrRoute"));
const UsuariosRoute_1 = __importDefault(require("./Usuarios/UsuariosRoute"));
const AdjuntosRoute_1 = __importDefault(require("./Pedidos/AdjuntosRoute"));
const PedidosRoute_1 = __importDefault(require("./Pedidos/PedidosRoute"));
const LoginRoute_1 = __importDefault(require("./Auth/LoginRoute"));
const CargaArchivosRoute_1 = __importDefault(require("./Adjuntos/CargaArchivosRoute"));
const DistritosRoute = __importDefault(require("./Personas/DistritosRoute")); 

let app = (0, express_1.default)();
// app.use('/auth', AuthRoutes);
app.use('/personas', TipoContactosRoutes_1.default, GeneroRoute_1.default, ContactosRoutes_1.default, TipoIdentificacionRoute_1.default, DepartamentoRoute_1.default, MunicipioRoute_1.default, DireccionRoute_1.default, PersonasRoute_1.default, DistritosRoute.default);
app.use("/pedido", PedidosRoute_1.default);
app.use("/mantenimiento", MetodosPagoRoute_1.default, RepartosRoute_1.default, EstadosRoute_1.default, AdjuntosRoute_1.default, TipoPedidosRoute_1.default);
app.use("/seguridad", MenusRoute_1.default, TiposUsuarioRoute_1.default, RelacionTipoUsrRoute_1.default, UsuariosRoute_1.default);
app.use("/auth", LoginRoute_1.default);
app.use("/adjuntos", CargaArchivosRoute_1.default);
exports.default = app;
