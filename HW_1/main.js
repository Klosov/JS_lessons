/*
  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода 
      
      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paintPage() {
    // Вариант 1:
    let r = getRandomIntInclusive(0, 255),
        g = getRandomIntInclusive(0, 255),
        b = getRandomIntInclusive(0, 255),

        // Вариант 2:
        RR = r.toString(16),
        GG = g.toString(16),
        BB = b.toString(16),

        pageColor_HEX= `#${RR + GG + BB}`,
        pageColor_RGB = `rgb(${r},${g},${b})`;

    body.style.background = pageColor_HEX;

    textCenter.innerHTML = pageColor_HEX + '<br>' + pageColor_RGB;
}

const body = document.querySelector('body');

const button = document.createElement('button');
button.innerText = 'Press me!';

const textCenter = document.createElement('h1');
textCenter.innerText = '';
textCenter.style.textAlign = 'center';

document.body.appendChild(button);
document.body.appendChild(textCenter);

button.onclick = () => {
    paintPage();
}

paintPage();