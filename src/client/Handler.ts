import { Client } from "./Client";
import { IHandlerComponent } from "../types/Handler.types";

export class Handler extends Client {
    add(component: IHandlerComponent) {
        component.load(this);
    }
}