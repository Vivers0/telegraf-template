"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    userID: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('User', User);
