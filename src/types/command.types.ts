import { Handler } from "../handler/Handler";
import { IBot, ICtx } from "./types";

export abstract class Command extends Handler {
    abstract name: string;
    public abstract exec(ctx: ICtx, bot?: IBot);
}