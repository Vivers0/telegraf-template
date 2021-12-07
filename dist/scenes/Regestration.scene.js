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
exports.AddAutoScene = void 0;
var telegraf_1 = require("telegraf");
var keyboard_1 = require("../keyboard/keyboard");
var utility_1 = require("../util/utility");
var database_1 = require("../database/database");
var AddAutoScene = /** @class */ (function () {
    function AddAutoScene() {
        var _this = this;
        this.obj = {};
        this.mongo = new database_1.MongoDatabase();
        // /////////////////////
        this.phoneHandler = telegraf_1.Telegraf.on('text', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
            var _a, userID, name, message, _b, isValid, phone, create;
            return __generator(this, function (_c) {
                _a = ctx.from, userID = _a.id, name = _a.first_name;
                message = ctx.message.text;
                _b = (0, utility_1.numberPhone)(message), isValid = _b.isValid, phone = _b.phone;
                if (!isValid) {
                    ctx.reply('Я не смог распознать номер телефона, попробуйте еще раз', keyboard_1.startKeyboard);
                    return [2 /*return*/];
                }
                this.obj[ctx.message.chat.id] = { name: name, phone: phone, userID: userID };
                create = this.mongo.createUser(this.obj[ctx.message.chat.id]);
                if (create) {
                    ctx.replyWithMarkdown('Добро пожаловать, я - *AutoBot*\nВыберите, что вы хотите сделать и нажмите на кнопку', keyboard_1.startKeyboard);
                    return [2 /*return*/, ctx.scene.leave()];
                }
                ctx.reply('Что-то пошло не так! Попробуйте позже!');
                return [2 /*return*/];
            });
        }); });
        // /////////////////////
        this.exec = function () {
            var Regestration = new telegraf_1.Scenes.WizardScene('regestration', _this.phoneHandler);
            Regestration.enter(function (ctx) { return ctx.reply('Добро пожаловать, я - *AutoBot*\nПожалуйста, введите номер телефона'); });
            return Regestration;
        };
    }
    return AddAutoScene;
}());
exports.AddAutoScene = AddAutoScene;