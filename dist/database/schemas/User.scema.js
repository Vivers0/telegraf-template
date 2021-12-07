"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    numberCar: { type: String, default: null },
    brand: { type: String, default: null },
    permissions: {
        isCalled: { type: Boolean, default: true },
        isHiddenAds: { type: Boolean, default: false },
        isPersonalMessage: { type: Boolean, default: true },
    },
});
exports.default = (0, mongoose_1.model)('User', User);
