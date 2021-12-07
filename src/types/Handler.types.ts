import { Client } from "../client/Client";

export type IHandlerComponent = {
    load: (self: Client) => void;
}