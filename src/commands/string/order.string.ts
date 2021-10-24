import { ICtx } from "../../types/types";
import { String } from "../../types/string.types";

export class OrderString extends String {
    name = 'order';
    exec(ctx: ICtx) {
        ctx.reply('order!');
    }
}