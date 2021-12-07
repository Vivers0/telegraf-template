import { Telegraf, Scenes } from 'telegraf';

export class AddAutoScene {
  obj = {};

  // /////////////////////
    //  /////////////////////

  exec = () => {
    const SceneAddAuto = new Scenes.WizardScene('addAuto', /* Scenes list */);
    SceneAddAuto.enter((ctx) => ctx.reply('Введите номер автомомбиля'));
    return SceneAddAuto;
  }
}