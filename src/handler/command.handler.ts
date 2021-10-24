import { Command } from "../types/command.types";
import { join } from 'path';
import { readdir } from 'fs';

export class CommandHandler {
    load({ bot }) {
        let path = join(__dirname, '..', 'commands');
        readdir(path, (_, files) => {
            const tsfiles = files.filter(f => f.split(".")[1] === "command");
            tsfiles.forEach(async file => {
                const cls = await import(`../commands/${file}`);
                const command: Command = new cls[Object.keys(cls)[0]]
                bot.command(command.name, (ctx) => command.exec(ctx, bot)) 
            })
        })
    }
}