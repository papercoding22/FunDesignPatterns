"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheesePizza_1 = __importDefault(require("./CheesePizza"));
const ClamPizza_1 = __importDefault(require("./ClamPizza"));
const PIZZAS = {
    cheese: CheesePizza_1.default,
    clam: ClamPizza_1.default,
};
class PizzaStore {
    createPizza(type) {
        const PizzaConstructor = PIZZAS[type];
        if (PizzaConstructor) {
            const pizza = new PizzaConstructor();
            return pizza;
        }
        return null;
    }
    orderPizza(type) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}
exports.default = PizzaStore;
//# sourceMappingURL=PizzaStore.js.map