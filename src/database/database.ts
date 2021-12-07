import { Mongo } from "../client/Mongo";
import User from "./schemas/User.schema";

export class MongoDatabase extends Mongo {
    async checkAvailability(userID: string) {
        const data = await this.getUser(userID);
        return data && +data.userID === +userID;
    }
    
    async getUser(userID: string | number) {
        const data = await User.findOne({ userID });
        return data;
    }

    async find(obj) {
        const data = await User.findOne(obj);
        return data;
    }

    createUser(obj) {
        const data = new User(obj);
        return data.save()
    }
}