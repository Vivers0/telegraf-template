import { Context, Telegraf } from "telegraf";
import { Update, Message } from "typegram";


export type ICtx = Context<{ message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }> & Omit<Context<Update>, keyof Context<Update>>
export type IBot = Telegraf<Context<Update>>