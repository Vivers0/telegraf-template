import { join } from 'path';
import { readdirSync }from 'fs';
import { Client } from '../client/Client';

export class CallbackHandler {
    addCallback(self: Client, callback: string[]) {
        callback.map((file: string) => {
            const pathToFile = join(__dirname, '..', 'callbacks', file)
            const cls = require(pathToFile)
            const command = new cls[Object.keys(cls)[0]];
            return command.exec(self);
        });
    }

    async load(self: Client) {
        const pathToDir = join(__dirname, '..', 'callbacks')
        const allFiles = readdirSync(pathToDir);
        const files = allFiles.filter(f => f.split('.')[1] === 'callback')
        this.addCallback(self, files)
    }
}