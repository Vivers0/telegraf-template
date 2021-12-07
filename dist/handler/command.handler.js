"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
var path_1 = require("path");
var fs_1 = require("fs");
var CommandHandler = /** @class */ (function () {
    function CommandHandler() {
    }
    CommandHandler.prototype.addCommand = function (self, cmds) {
        cmds.forEach(function (file) {
            var pathToFile = (0, path_1.join)(__dirname, '..', 'commands', file);
            var cls = require(pathToFile);
            var command = new cls[Object.keys(cls)[0]];
            self.bot.command(command.name, function (ctx) { return command.exec(ctx, self.bot); });
        });
    };
    CommandHandler.prototype.load = function (self) {
        var pathToDir = (0, path_1.join)(__dirname, '..', 'commands');
        var allFiles = (0, fs_1.readdirSync)(pathToDir);
        var files = allFiles.filter(function (f) { return f.split('.')[1] === 'command'; });
        return this.addCommand(self, files);
    };
    return CommandHandler;
}());
exports.CommandHandler = CommandHandler;
