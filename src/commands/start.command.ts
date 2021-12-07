import { IContext } from "../types/types";

export class StartCommand {
    name = 'start';

    exec = async (ctx: IContext) => {
       ctx.reply('Hi!')
    }
}