"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const telegraf_1 = require("telegraf");
class Client {
    constructor() {
        this.token = '931991068:AAHQT4R97Ce9XLqVVcq3JFiXF_DRfw-PQ0A';
        this.bot = new telegraf_1.Telegraf(this.token);
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map