import { Markup } from 'telegraf';

export const sendKeyboard = Markup.keyboard([
  ['✉️ Отправить сообщение', '❌ Выйти'],
]).resize();