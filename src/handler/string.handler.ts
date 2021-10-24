import { Command } from "../types/command.types";
import { join } from 'path';
import { readdir } from 'fs';
import { IBot, ICtx } from '../types/types'

export class StringHandler {
    load({ bot }) {
        let path = join(__dirname, '..', 'commands', 'string');
        readdir(path, (_, files) => {
            const tsfiles = files.filter(f => f.split(".")[1] === "string");
            bot.on('text', async (ctx: ICtx) => {
                const message = ctx.message.text;
                tsfiles.forEach(async file => {
                    const cls = await import(`../commands/string/${file}`);
                    const text: Command = new cls[Object.keys(cls)[0]]
                    if (text.name === message) {
                        text.exec(ctx, bot)
                    }
                    // bot.command(command.name, (ctx) => command.exec(ctx, bot)) 
                })
            })
        })
    }
}