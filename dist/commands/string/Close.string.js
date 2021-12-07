"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseAutoString = void 0;
var keyboard_1 = require("../../keyboard/keyboard");
var CloseAutoString = /** @class */ (function () {
    function CloseAutoString() {
        this.name = '❌ Выйти';
        this.exec = function (ctx) {
            ctx.reply('Добро пожаловать, я - AutoBot\nВыберите, что вы хотите сделать и нажмите на кнопку', keyboard_1.startKeyboard);
        };
    }
    return CloseAutoString;
}());
exports.CloseAutoString = CloseAutoString;
