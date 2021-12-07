import { Client } from "../client/Client";
import UserScema from "../database/schemas/User.schema";
import { Markup } from "telegraf";

export class IsCall {
    exec = (self: Client) => {
        self.bot.action('isCall', async (ctx: any) => {
            // callback
        })
    }
}