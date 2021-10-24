"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotCreator = void 0;
const Handler_1 = require("./handler/Handler");
class BotCreator {
    start() {
        const handler = new Handler_1.Handler();
        handler.loadCommands();
        console.log('Ready!');
        return handler.bot.launch();
    }
}
exports.BotCreator = BotCreator;
//# sourceMappingURL=init.js.map