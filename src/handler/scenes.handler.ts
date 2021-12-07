import { join } from 'path';
import { readdirSync }from 'fs';
import { Scenes, session } from "telegraf";
import { Client } from '../client/Client';

export class ScenesHandler {
    handle(self: Client, scenes) {
        const stages = new Scenes.Stage(scenes);
        self.bot.use(session(), stages.middleware())
    }    

    addScenes(self: Client, cmds: string[]) {
        const arrayWithScenes = cmds.map((file: string) => {
            const pathToFile = join(__dirname, '..', 'scenes', file)
            const cls = require(pathToFile)
            const command = new cls[Object.keys(cls)[0]];
            return command.exec();
            });
        return this.handle(self, arrayWithScenes);
    }

    async load(self: Client) {
        const pathToDir = join(__dirname, '..', 'scenes')
        const allFiles = readdirSync(pathToDir);
        const files = allFiles.filter(f => f.split('.')[1] === 'scene')
        this.addScenes(self, files);
    }
}