"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton01_1 = __importDefault(require("./Singleton01"));
const Singleton01_2 = __importDefault(require("./Singleton01"));
function main() {
    console.log("Are Singleton01_A and Singleton01_B the same instance? " +
        (Singleton01_1.default === Singleton01_2.default));
}
exports.default = main;
//# sourceMappingURL=index.js.map