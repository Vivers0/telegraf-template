import { Telegraf } from 'telegraf';

export abstract class Client {
    private token = '931991068:AAHQT4R97Ce9XLqVVcq3JFiXF_DRfw-PQ0A';
    bot = new Telegraf(this.token);
}