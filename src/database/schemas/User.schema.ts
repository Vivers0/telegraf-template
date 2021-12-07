import { Schema, model } from "mongoose";

const User = new Schema({
    userID: { type: String, required: true },
});

export default model('User', User);