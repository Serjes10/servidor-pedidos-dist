const DbHelper = require('../../helpers/DbHelper.js');
const {errorMensaje} = require('../../classes/classes.js');

class DistritosController {

    async mostrarDistritos() {
        try {
            let conexionSQL = new DbHelper.default();
            if (parametros) {
                conexionSQL.parametros = [0];
            }
            return conexionSQL.Ejecutar("call spDistritosMostar(?)");
        }
        catch (error) {
            return errorMensaje("Ocurrio un error al mostrar los distritos");
        }
    }
}

exports.default = DistritosController;