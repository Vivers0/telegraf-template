"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var telegraf_1 = require("telegraf");
var Client = /** @class */ (function () {
    function Client() {
        this.token = process.env.TOKEN;
        this.bot = new telegraf_1.Telegraf(this.token);
    }
    return Client;
}());
exports.Client = Client;
