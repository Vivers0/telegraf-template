"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendKeyboard = void 0;
var telegraf_1 = require("telegraf");
exports.sendKeyboard = telegraf_1.Markup.keyboard([
    ['✉️ Отправить сообщение', '❌ Выйти'],
]).resize();
