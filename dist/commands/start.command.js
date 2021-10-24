"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const command_types_1 = require("../types/command.types");
class StartCommand extends command_types_1.Command {
    constructor() {
        super(...arguments);
        this.name = 'start';
    }
    exec(ctx) {
        ctx.reply('Welcome!');
    }
}
exports.StartCommand = StartCommand;
//# sourceMappingURL=start.command.js.map