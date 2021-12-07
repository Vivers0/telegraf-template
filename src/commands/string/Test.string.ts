import { IContext } from "../../types/types";

export class SearchAuto {
    name = 'test';
    exec(ctx: IContext) {
        ctx.reply('test');
    }
}