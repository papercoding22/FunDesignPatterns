"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor({ name = "", dough = "", toppings = [], sauce = "" }) {
        (this.name = name), (this.dough = dough), (this.toppings = toppings);
        this.sauce = sauce;
    }
    prepare() {
        console.log("Preparing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce");
        console.log("Adding toppings");
        for (let topping of this.toppings) {
            console.log(topping + " ");
        }
    }
    bake() {
        console.log("Baking for 25 minutes at 350");
    }
    cut() {
        console.log("Cutting the pizza into diagonal slices");
    }
    box() {
        console.log("Place pizza in official Pizza Store box");
    }
    getName() {
        return this.name;
    }
}
exports.default = Pizza;
//# sourceMappingURL=Pizza.js.map