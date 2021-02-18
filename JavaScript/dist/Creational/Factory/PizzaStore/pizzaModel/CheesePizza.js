"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicPizza_1 = __importDefault(require("./BasicPizza"));
class CheesePizza extends BasicPizza_1.default {
    constructor() {
        super({
            name: "Deep Dish Cheese Pizza",
            dough: "Extra Thin Crust Dough",
            sauce: "Plum Tomato Sauce",
            toppings: ["Shredded Mozzarella Cheese"],
        });
    }
}
exports.default = CheesePizza;
//# sourceMappingURL=CheesePizza.js.map