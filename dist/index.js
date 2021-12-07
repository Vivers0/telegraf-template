"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var path_1 = require("path");
dotenv.config({ path: (0, path_1.join)(__dirname, '..', '.env') });
var init_1 = require("./init");
var client = new init_1.BotCreator();
client.start();
