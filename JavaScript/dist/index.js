"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_menu_1 = __importDefault(require("console-menu"));
const Singleton_1 = __importDefault(require("./Creational/Singleton"));
const PizzaStore_1 = __importDefault(require("./Creational/Factory/PizzaStore"));
var MENU_ID;
(function (MENU_ID) {
    MENU_ID["SINGLETON"] = "SINGLETON";
    MENU_ID["FACTORY"] = "FACTORY";
})(MENU_ID || (MENU_ID = {}));
function main() {
    console_menu_1.default([
        { hotkey: "1", title: "Singleton Example", id: MENU_ID.SINGLETON },
        { hotkey: "2", title: "Factory Example", id: MENU_ID.FACTORY },
        { hotkey: "3", title: "Three", id: "" },
        { separator: true, id: "" },
        { hotkey: "?", title: "Help", id: "" },
    ], {
        header: "Example menu",
        border: true,
    }).then((item) => {
        if (item.id) {
            switch (item.id) {
                case MENU_ID.SINGLETON:
                    Singleton_1.default();
                    break;
                case MENU_ID.FACTORY:
                    PizzaStore_1.default();
                    break;
                default:
                    break;
            }
        }
        main();
    });
}
main();
//# sourceMappingURL=index.js.map