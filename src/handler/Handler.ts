import { Client } from "../client/Client";
import { join } from 'path';
import { readdir } from 'fs';

export class Handler extends Client {
    loadCommands() {
        let path = join(__dirname, '..', 'handler');
        readdir(path, (_, files) => {
            const tsfiles = files.filter(f => f.split(".")[1] === "handler");
            tsfiles.forEach(async file => {
                const cls = await import(`../handler/${file}`);
                const component = new cls[Object.keys(cls)[0]]
                component.load(this)
            })
        })
    }
}