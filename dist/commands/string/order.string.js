"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderString = void 0;
const string_types_1 = require("../../types/string.types");
class OrderString extends string_types_1.String {
    constructor() {
        super(...arguments);
        this.name = 'order';
    }
    exec(ctx) {
        ctx.reply('order!');
    }
}
exports.OrderString = OrderString;
//# sourceMappingURL=order.string.js.map