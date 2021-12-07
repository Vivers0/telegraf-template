"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAuto = void 0;
var keyboard_1 = require("../../keyboard/keyboard");
var SearchAuto = /** @class */ (function () {
    function SearchAuto() {
        this.name = '🔎 Искать автомобиль';
    }
    SearchAuto.prototype.exec = function (ctx) {
        ctx.reply('Каким способом вы хотите найти автомобиль?', keyboard_1.searchKeyboard);
    };
    return SearchAuto;
}());
exports.SearchAuto = SearchAuto;
