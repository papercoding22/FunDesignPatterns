"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class BasicPizza extends Pizza_1.default {
    cut() {
        console.log("Cutting the pizza into square slices");
    }
}
exports.default = BasicPizza;
//# sourceMappingURL=BasicPizza.js.map