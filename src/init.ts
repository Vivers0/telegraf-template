require('dotenv').config({ path: __dirname+'/../.env' });
import { MongoDatabase } from "./database/database";
import { Handler } from "./handler/Handler";
import * as express from 'express';

export class BotCreator {
    start() {
        const handler = new Handler();
        handler.loadCommands()

        this.startMongo();
        this.createHttp();
        return handler.bot.launch();
    }

    startMongo() {
        const mongo = new MongoDatabase()
        return mongo.connect()
    }

    createHttp() {
        const app = express();
        const port = process.env.PORT as string || 8080;
        app.get('/', (req, res) => res.send('Ready!'))
        app.listen(port, () => console.log('Listening on port', port));
    }
}