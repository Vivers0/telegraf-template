import { connect } from "mongoose";
import { Client } from "./Client";

export abstract class Mongo extends Client {
    private mongoURL = process.env.MONGO as string;
    connect() {
        console.log('MongoDB: Connect')
        return connect(this.mongoURL)
    }
}