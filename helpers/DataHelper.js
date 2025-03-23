"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorItem_1 = __importDefault(require("./ErrorItem"));
class DataHelper {
    constructor(item) {
        if (!item) {
            item = {};
        }
        this.data = item.data || {};
        this.errors = item.errors || [];
        this.hasError = item.hasError || false;
    }
    llenarErrores(errors) {
        var er = [];
        errors.forEach((element) => {
            er.push(new ErrorItem_1.default(element));
        });
        this.hasError = true;
        this.errors = er;
    }
}
exports.default = DataHelper;
