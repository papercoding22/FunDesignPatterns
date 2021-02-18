"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaStore_1 = __importDefault(require("./PizzaStore"));
function main() {
    const pizzaStore = new PizzaStore_1.default();
    pizzaStore.orderPizza("cheese");
}
exports.default = main;
//# sourceMappingURL=index.js.map