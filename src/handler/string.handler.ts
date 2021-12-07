import { join } from 'path';
import { readdirSync } from 'fs';
import { IContext } from '../types/types';
import { Client } from '../client/Client';

export class StringHandler {
    addCommand(self: Client, cmds: string[]) {
        self.bot.on('text', async (ctx: IContext) => {
            const message = ctx.message.text;
            cmds.forEach(async (file: string) => {
                const pathToFile = join(__dirname, '..', 'commands','string', file)
                const cls = require(pathToFile)
                const command = new cls[Object.keys(cls)[0]];
                if (command.name === message) {
                    return command.exec(ctx, self.bot);
                }
            })
        })
        
    }

    load(self: Client) {
        const pathToDir = join(__dirname, '..', 'commands', 'string')
        const allFiles = readdirSync(pathToDir);
        const files = allFiles.filter(f => f.split('.')[1] === 'string')
        return this.addCommand(self, files);
    }
}