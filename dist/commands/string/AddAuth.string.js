"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAutoString = void 0;
var AddAutoString = /** @class */ (function () {
    function AddAutoString() {
        this.name = '🟢 Добавить свой автомобиль';
        this.exec = function (ctx) {
            ctx.scene.enter('addAuto');
        };
    }
    return AddAutoString;
}());
exports.AddAutoString = AddAutoString;
