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
exports.StringHandler = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
class StringHandler {
    load({ bot }) {
        let path = (0, path_1.join)(__dirname, '..', 'commands', 'string');
        (0, fs_1.readdir)(path, (_, files) => {
            const tsfiles = files.filter(f => f.split(".")[1] === "string");
            bot.on('text', (ctx) => __awaiter(this, void 0, void 0, function* () {
                const message = ctx.message.text;
                tsfiles.forEach((file) => __awaiter(this, void 0, void 0, function* () {
                    const cls = yield Promise.resolve().then(() => require(`../commands/string/${file}`));
                    const text = new cls[Object.keys(cls)[0]];
                    if (text.name === message) {
                        text.exec(ctx, bot);
                    }
                    // bot.command(command.name, (ctx) => command.exec(ctx, bot)) 
                }));
            }));
        });
    }
}
exports.StringHandler = StringHandler;
//# sourceMappingURL=string.handler.js.map