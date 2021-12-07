"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberPhone = exports.isAutoNumber = exports.replacer = void 0;
var awesome_phonenumber_1 = require("awesome-phonenumber");
function replacer(string) {
    var str = string;
    var replaceObj = {
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
    var replace;
    for (var i = 0; i < str.length; i += 1) {
        if (replaceObj[str[i].toLowerCase()] !== undefined) {
            if (str[i] === str[i].toLowerCase()) {
                replace = replaceObj[str[i].toLowerCase()];
            }
            else if (str[i] === str[i].toUpperCase()) {
                replace = replaceObj[str[i].toLowerCase()].toUpperCase();
            }
            str = str.replace(str[i], replace);
        }
    }
    return str;
}
exports.replacer = replacer;
function isAutoNumber(str) {
    var number = str.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    var regStandart = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
    var regTaxi = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
    var regTest = regStandart.test(number) || regTaxi.test(number);
    var regReplaceTest = regStandart.test(replacer(number)) || regTaxi.test(replacer(number));
    if (regReplaceTest) {
        return {
            valid: regReplaceTest,
            number: replacer(number),
        };
    }
    return { response: false };
}
exports.isAutoNumber = isAutoNumber;
function numberPhone(str) {
    var pn = new awesome_phonenumber_1.default(str, 'RU');
    return {
        isValid: pn.isValid(),
        phone: pn.getNumber('e164') || null,
    };
}
exports.numberPhone = numberPhone;
