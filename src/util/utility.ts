import PhoneNumber from 'awesome-phonenumber';

export function replacer(string: string) {
    let str = string;
    const replaceObj = {
      q: 'й',
      w: 'ц',
      e: 'у',
      r: 'к',
      t: 'е',
      y: 'н',
      u: 'г',
      i: 'ш',
      o: 'щ',
      p: 'з',
      '[': 'х',
      ']': 'ъ',
      a: 'ф',
      s: 'ы',
      d: 'в',
      f: 'а',
      g: 'п',
      h: 'р',
      j: 'о',
      k: 'л',
      l: 'д',
      ';': 'ж',
      "'": 'э',
      z: 'я',
      x: 'ч',
      c: 'с',
      v: 'м',
      b: 'и',
      n: 'т',
      m: 'ь',
      ',': 'б',
      '.': 'ю',
      '/': '.',
    };
    let replace;
    for (let i = 0; i < str.length; i += 1) {
      if (replaceObj[str[i].toLowerCase()] !== undefined) {
        if (str[i] === str[i].toLowerCase()) {
          replace = replaceObj[str[i].toLowerCase()];
        } else if (str[i] === str[i].toUpperCase()) {
          replace = replaceObj[str[i].toLowerCase()].toUpperCase();
        }
        str = str.replace(str[i], replace);
      }
    }
    return str;
  }

export function isAutoNumber(str: string) {
  const number = str.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
  const regStandart = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
  const regTaxi = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
  const regTest = regStandart.test(number) || regTaxi.test(number);
  const regReplaceTest = regStandart.test(replacer(number)) || regTaxi.test(replacer(number))
  if (regReplaceTest) {
    return {
      valid: regReplaceTest,
      number: replacer(number),
    };
  }
  return { response: false };
}

export function numberPhone(str: string) {
    const pn = new PhoneNumber(str, 'RU');
    return {
      isValid: pn.isValid(),
      phone: pn.getNumber('e164') || null,
    }
  }