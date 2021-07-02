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

function CaesarCipher(n, word) {
    this.n = n;
    this.word = word;
    this.encryptCaesar = function() {
        let arrChars = this.word.split('');
        let startCharCode = 40;

        arrChars.forEach((value) => {

            if (value.charCodeAt(0) === 200) {
                startCharCode = 40
            }
            value.charCodeAt(0) + this.n;
        })
    }
    this.decryptCaesar = function(...aruments) {
        console.log(this.word)
    }
}


