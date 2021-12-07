import { Handler } from "./client/Handler";
import * as express from 'express';
import { CommandHandler } from "./handler/command.handler";
import { StringHandler } from "./handler/string.handler";
import { ScenesHandler } from "./handler/scenes.handler";
import { MongoDatabase } from "./database/database";
import { CallbackHandler } from "./handler/callback.handler";

export class BotCreator {
    start() {
        const handler = this.handle();
        this.startMongo();
        this.createHttp();
        return handler.bot.launch();
    }

    handle() {
        const handler = new Handler();
        const commands = new CommandHandler()
        const strings = new StringHandler()
        // const scenes = new ScenesHandler()
        const callbacks = new CallbackHandler()
        handler.add(callbacks)
        // handler.add(scenes)
        handler.add(commands)
        handler.add(strings)
        return handler;
    }

    async startMongo() {
        const mongo = new MongoDatabase()
        return mongo.connect()
    }

    async createHttp() {
        const app = express();
        const port = process.env.PORT || 8060;
        app.get('/', (_, res) => res.send('Ready!'))
        app.listen(port, () => console.log('Listening on port', port));
    }
}