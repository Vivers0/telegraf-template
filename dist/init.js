"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotCreator = void 0;
var Handler_1 = require("./client/Handler");
var express = require("express");
var command_handler_1 = require("./handler/command.handler");
var string_handler_1 = require("./handler/string.handler");
var database_1 = require("./database/database");
var callback_handler_1 = require("./handler/callback.handler");
var BotCreator = /** @class */ (function () {
    function BotCreator() {
    }
    BotCreator.prototype.start = function () {
        var handler = this.handle();
        this.startMongo();
        this.createHttp();
        return handler.bot.launch();
    };
    BotCreator.prototype.handle = function () {
        var handler = new Handler_1.Handler();
        var commands = new command_handler_1.CommandHandler();
        var strings = new string_handler_1.StringHandler();
        // const scenes = new ScenesHandler()
        var callbacks = new callback_handler_1.CallbackHandler();
        handler.add(callbacks);
        // handler.add(scenes)
        handler.add(commands);
        handler.add(strings);
        return handler;
    };
    BotCreator.prototype.startMongo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mongo;
            return __generator(this, function (_a) {
                mongo = new database_1.MongoDatabase();
                return [2 /*return*/, mongo.connect()];
            });
        });
    };
    BotCreator.prototype.createHttp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var app, port;
            return __generator(this, function (_a) {
                app = express();
                port = process.env.PORT || 8060;
                app.get('/', function (_, res) { return res.send('Ready!'); });
                app.listen(port, function () { return console.log('Listening on port', port); });
                return [2 /*return*/];
            });
        });
    };
    return BotCreator;
}());
exports.BotCreator = BotCreator;
