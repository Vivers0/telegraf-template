import { join } from 'path';
import { readdirSync } from 'fs';
import { IContext } from '../types/types';
import { Client } from '../client/Client';

export class CommandHandler {
    addCommand(self: Client, cmds: string[]) {
        cmds.forEach((file: string) => {
            const pathToFile = join(__dirname, '..', 'commands', file)
            const cls = require(pathToFile)
            const command = new cls[Object.keys(cls)[0]];
            self.bot.command(command.name, (ctx: IContext) => command.exec(ctx, self.bot));
        })
    }

    load(self: Client) {
        const pathToDir = join(__dirname, '..', 'commands')
        const allFiles = readdirSync(pathToDir);
        const files = allFiles.filter(f => f.split('.')[1] === 'command')
        return this.addCommand(self, files);
    }
}