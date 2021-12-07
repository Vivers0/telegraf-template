"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAuto = void 0;
var SearchAuto = /** @class */ (function () {
    function SearchAuto() {
        this.name = 'test';
    }
    SearchAuto.prototype.exec = function (ctx) {
        ctx.reply('test');
    };
    return SearchAuto;
}());
exports.SearchAuto = SearchAuto;
