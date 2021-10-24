import { Schema, model } from "mongoose";

const User = new Schema({
    userID: String
});

export default model('User', User);