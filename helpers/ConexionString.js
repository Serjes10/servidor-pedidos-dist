"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConexionString {
    constructor(sqlConfig) {
        // private driver: string;
        this.options = {};
        this.pool = {};
        //  private typeCast:any;
        //private port: number;
        this.typeCast = function castField(field, useDefaultTypeCasting) {
            // We only want to cast bit fields that have a single-bit in them. If the field
            // has more than one bit, then we cannot assume it is supposed to be a Boolean.
            if ((field.type === "BIT") && (field.length === 1)) {
                var bytes = field.buffer();
                // A Buffer in Node represents a collection of 8-bit unsigned integers.
                // Therefore, our single "bit field" comes back as the bits '0000 0001',
                // which is equivalent to the number 1.
                return (bytes[0] === 1);
            }
            return (useDefaultTypeCasting());
        };
        if (!sqlConfig) {
            sqlConfig = {};
        }
        ;
        this.user = sqlConfig.user || 'system';
        this.password = sqlConfig.pasword || '4S7Q$DxotH!u3Z2b';
        this.host = sqlConfig.server || '18.117.207.99';
        this.database = sqlConfig.database || 'sistemapedidos';
        //this.driver = 'tedious';
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 };
        this.port = sqlConfig.port || 3306;
        this.typeCast = this.typeCast;
    }
}
exports.default = ConexionString;
