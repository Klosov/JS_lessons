
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeCollection); -> Array

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

const resultInput = document.getElementById('result');

const formData = new FormData();
formData.append('name', 'Tester');
formData.append('city', 'Test');
formData.append('age', '20');

let jsonFormData = JSON.stringify(Array.from(formData));

console.log(jsonFormData);

resultInput.value = jsonFormData;

console.log(JSON.parse(jsonFormData));
