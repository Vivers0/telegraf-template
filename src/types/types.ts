import { Context, Telegraf } from "telegraf";
import { SceneContextScene, WizardContextWizard, WizardSessionData } from "telegraf/typings/scenes";
import { Update, Message } from "typegram";


export type IContext = Context<{ message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }> & Omit<Context<Update>, keyof Context<Update>> & { scene: SceneContextScene<Context, WizardSessionData>; wizard: WizardContextWizard<any> }
export type IBot = Telegraf<Context<Update>>
