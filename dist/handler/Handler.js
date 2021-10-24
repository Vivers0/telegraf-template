"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
const Client_1 = require("../client/Client");
const path_1 = require("path");
const fs_1 = require("fs");
class Handler extends Client_1.Client {
    loadCommands() {
        let path = (0, path_1.join)(__dirname, '..', 'handler');
        (0, fs_1.readdir)(path, (_, files) => {
            const tsfiles = files.filter(f => f.split(".")[1] === "handler");
            tsfiles.forEach((file) => __awaiter(this, void 0, void 0, function* () {
                const cls = yield Promise.resolve().then(() => require(`../handler/${file}`));
                const component = new cls[Object.keys(cls)[0]];
                component.load(this);
            }));
        });
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map