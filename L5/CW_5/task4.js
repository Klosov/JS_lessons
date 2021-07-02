/*
  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾
*/

function encryptCaesar() { // shift, word
    let arrChars = this.word.split('');
    let arrCharsEncrypt = [];

    arrChars.forEach((value) => {
        arrCharsEncrypt.push(value.charCodeAt(0));
    });

    let encryptedPhrase = arrCharsEncrypt.map((num) => {
        return String.fromCharCode(num + this.shift);
    });

    return encryptedPhrase.join('');
}

function decryptCaesar() { // shift, word
    let arrChars = this.word.split('');
    let arrCharsDecrypt = [];

    arrChars.forEach((value) => {
        arrCharsDecrypt.push(value.charCodeAt(0));
    });

    let decryptedPhrase = arrCharsDecrypt.map((num) => {
        return String.fromCharCode(num - this.shift);
    });

    return decryptedPhrase.join('');
}

let paramsEncrypt = {
    shift: 3,
    word: 'I know how binding works in JS'
}

let paramsDecrypt = {
    shift: 3,
    word: 'L#nqrz#krz#elqglqj#zrunv#lq#MV'
}

let newEncryptCaesar = encryptCaesar.bind(paramsEncrypt);
newEncryptCaesar(); // L#nqrz#krz#elqglqj#zrunv#lq#MV

let newDecryptCaesar = decryptCaesar.bind(paramsDecrypt);
newDecryptCaesar(); // I know how binding works in JS

