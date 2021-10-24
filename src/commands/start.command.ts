import { ICtx } from "../types/types";
import { Command } from "../types/command.types";

export class StartCommand extends Command {
    name = 'start';
    exec(ctx: ICtx) {
        ctx.reply('Welcome!');
    }
}