"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByNumberAutoString = void 0;
var FindByNumberAutoString = /** @class */ (function () {
    function FindByNumberAutoString() {
        this.name = '🔎 Искать по номеру автомобиля';
    }
    FindByNumberAutoString.prototype.exec = function (ctx) {
        ctx.scene.enter('findAutoByNumber');
    };
    return FindByNumberAutoString;
}());
exports.FindByNumberAutoString = FindByNumberAutoString;
