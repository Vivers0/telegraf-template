import { MongoDatabase } from "../database/database";
import { profileKeyboard } from "../keyboard/keyboard";
import { IContext } from "../types/types";

const mongo = new MongoDatabase()

export async function getUserInformation(ctx: IContext) {
    const userID = ctx.from.id;
    const user = await mongo.getUser(userID);
    if (user) {
      if (user.numberCar) {
        return `<strong>${user.name} (${user.userID})</strong>\n\n🚗 Автомобиль: ${user.brand}, ${user.numberCar}\n\n📞 Номер телефона: ${user.phone}\n\n${user.permissions.isCalled ? '✅ Номер телефона не скрыт' : '🚫 Номер телефона скрыт'}`;
      }
      return `<strong>${user.name} (${user.userID})</strong>\n\n📞 Номер телефона: ${user.phone}\n\n${user.permissions.isCalled ? '✅ Номер телефона не скрыт' : '🚫 Номер телефона скрыт'}`;
    }
    return 'Я не нашел информацию о тебе 😥, попробуй добавить информацию о своей машине еще раз!';
  }
  
  export async function isProfile(ctx: IContext) {
    const userID = ctx.from.id;
    const user = await mongo.getUser(userID);
    if (user) {
      ctx.reply('Ваш профиль:', profileKeyboard);
    } else {
      ctx.reply('⛔ Вы не добавили свою машину в БД!');
    }
  }