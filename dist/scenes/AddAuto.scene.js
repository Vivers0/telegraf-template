"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAutoScene = void 0;
var telegraf_1 = require("telegraf");
var AddAutoScene = /** @class */ (function () {
    function AddAutoScene() {
        this.obj = {};
        // /////////////////////
        //  /////////////////////
        this.exec = function () {
            var SceneAddAuto = new telegraf_1.Scenes.WizardScene('addAuto');
            SceneAddAuto.enter(function (ctx) { return ctx.reply('Введите номер автомомбиля'); });
            return SceneAddAuto;
        };
    }
    return AddAutoScene;
}());
exports.AddAutoScene = AddAutoScene;
