import { connect } from "mongoose";

export abstract class Mongo {
    private mongoURL = process.env.MONGO_URL;
    connect() {
        console.log('MongoDB: Connect')
        return connect(this.mongoURL)
    }
}