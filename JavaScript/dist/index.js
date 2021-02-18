"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_menu_1 = __importDefault(require("console-menu"));
const Singleton_1 = __importDefault(require("./Singleton"));
var MENU_ID;
(function (MENU_ID) {
    MENU_ID["SINGLETON"] = "SINGLETON";
})(MENU_ID || (MENU_ID = {}));
function main() {
    console_menu_1.default([
        { hotkey: "1", title: "Singleton Example", id: MENU_ID.SINGLETON },
        { hotkey: "2", title: "Two", selected: true },
        { hotkey: "3", title: "Three" },
        { separator: true },
        { hotkey: "?", title: "Help" },
    ], {
        header: "Example menu",
        border: true,
    }).then((item) => {
        switch (item.id) {
            case MENU_ID.SINGLETON:
                Singleton_1.default();
                main();
        }
    });
}
main();
//# sourceMappingURL=index.js.map