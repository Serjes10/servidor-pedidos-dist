"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemError {
    constructor(item) {
        if (Object.keys(item).length === 0) {
            item = {};
        }
        this.codigo = item.codigo || 0;
        this.descripcion = item.descripcion || "";
        this.criticidad = item.criticidad || "";
    }
}
exports.default = ItemError;
