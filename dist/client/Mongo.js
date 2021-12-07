"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
var mongoose_1 = require("mongoose");
var Mongo = /** @class */ (function () {
    function Mongo() {
        this.mongoURL = process.env.MONGO_URL;
    }
    Mongo.prototype.connect = function () {
        console.log('MongoDB: Connect');
        return (0, mongoose_1.connect)(this.mongoURL);
    };
    return Mongo;
}());
exports.Mongo = Mongo;
