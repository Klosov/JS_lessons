// console.log('cookies works', document.cookie);
/*

  Cookies - специальный формат для сохранения данных который хранится в браузере.
  Сохраняет пары значений name-value:
  username = Vasya Pupkin
  document.cookie

*/

// Значение Cookie не могут содержать точку с запятой, запятые или символы разделители.
// записанный cookie сохраняются в текущем сеансе браузера

//// следующий cookie будет хранится браузером на проятжении 1 недели (60 * 60 * 24 * 7).
// document.cookie = "info=123;max-age=604800;";

//// следующий cookie будет хранится браузером на проятжении 10мс
// document.cookie = "info=helloJavaScript;max-age=10;";

// console.log( document.cookie );
// // Установить кастомную дату
var date = new Date();
    date = date.setDate( date.getDate() + 1 );
    console.log('date', date );
// // //actors
document.cookie = `Hello=JavaScript;max-age=${date};`;


// Удаление куки:
// var date = new Date(0);
// console.log( date );
// document.cookie = "Hello=; path=/; expires=" + date;


// Получение куки
var cookies = document.cookie.split(';');
console.log( cookies );

// функции для работы с куками
// source: https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) { 
  setCookie(name, '', -1); 
}
// examples

// //setCookie
// setCookie('userName', 'Bill', 12);

// // get cookie
// var infoFromCookies = getCookie('userName');
// console.log(infoFromCookies);

// // delete cookie
// deleteCookie('userName');


/* 
Cookies  и localStorage используются для разных целей.
Файлы cookie в основном предназначены для чтения на стороне сервера, localStorage может быть прочитано только на стороне клиента.

Помимо того, что файлы cookie являются старым способом сохранения данных, они дают вам ограничение в 4096 байт (на самом деле 4095) - на файл cookie. 
Размер localStorage составляет 5 МБ на домен. localStorage - это реализация интерфейса хранилища. 
Он хранит данные без даты истечения срока действия и очищается только с помощью JavaScript или очистки кеша браузера / локально сохраненных данных - в отличие от истечения срока действия cookie.

Cookies:
  Представлен до HTML5. 
  Имеет срок действия. 
  Очистить с помощью JS или кеш браузера или по истечении срока действия. 
  Будет отправлено на сервер по каждому запросу. 
  Емкость 4 КБ. 
  В файлах cookie могут храниться только строки. 
  Есть два типа файлов cookie: постоянные и сеансовые. 
localStorage: 
  Представлено в HTML5. 
  Не имеет срока действия. 
  Очистить с помощью JS или Очистить кеш браузера. 
  Вы можете выбрать, когда данные должны быть отправлены на сервер. 
  Емкость составляет 5 МБ. 
  Данные хранятся неограниченное время и должны быть строкой. 
  Есть только один тип.

*/
