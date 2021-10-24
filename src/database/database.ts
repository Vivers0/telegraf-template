import { Mongo } from "../client/Mongo";
import User from "./schemas/User.scema";

export class MongoDatabase extends Mongo {
    async getUser(userID) {
        const data = await User.findOne({ userID });
        if (data && data.userID === userID) {
            return data;
        }
        return null;
    }
}