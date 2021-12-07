import { Telegraf } from 'telegraf';

export abstract class Client {
    private token: string | null = process.env.TOKEN;
    bot = new Telegraf(this.token);
}