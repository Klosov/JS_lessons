/*
Документация:
https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation

form.checkValidity() > Проверка всех полей формы на валидость
form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

formElement.validity > Объект с параметрами валидности поля
formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
    сообщения выведет message в браузерный попал

Классы для стилизации состояния элемента
input:valid{}
input:invalid{}

Задание:

Используя браузерное API для валидации форм реализовать валидацию следующей формы:
- Имя пользователя: type:text -> validation: required; minlength = 2;
    Если пустое выввести сообщение: "Как тебя зовут дружище?!"
- Email: type: email -> validation: required; minlength = 3; validEmail;
    Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
- Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
    Если пустой вывести сообщение: "Я никому не скажу наш секрет";
- Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
    Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
- Напиши спасибо за яблоки: type: text -> validation: required;
    Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

- Согласен на обучение: type: checkbox -> validation: required;
    Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

Внизу две кнопки:

1) Обычный submit который отправит форму, если она валидна.
2) Кнопка Validate(Проверить) которая запускает методы:
    - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
    - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть
*/

const formRegistration = document.forms['registration_form'],
    firstName = document.getElementById('first_name'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    num_apples_eaten = document.getElementById('num_apples_eaten'),
    thank_you = document.getElementById('thank_you'),
    agreement = document.getElementById('agreement'),
    validateBtn = formRegistration.querySelector('button[type=button]');

formRegistration.addEventListener('submit', (e) => {
    alert('Форма отправлена');

    e.preventDefault();
});

validateBtn.addEventListener('click', (e) => {

    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity("Как тебя зовут дружище?!");
    } else {
        firstName.setCustomValidity("");
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
    } else {
        email.setCustomValidity("");
    }

    if (password.validity.valueMissing) {
        password.setCustomValidity("Я никому не скажу наш секрет");
    } else {
        password.setCustomValidity("");
    }

    if (num_apples_eaten.value === '0') {
        num_apples_eaten.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные")
    } else {
        num_apples_eaten.setCustomValidity("");
    }

    if (thank_you.validity.typeMismatch || thank_you.value.trim() !== 'спасибо') {
        thank_you.setCustomValidity("Фу, неблагодарный(-ая)!");
    } else {
        thank_you.setCustomValidity("");
    }

    if (!agreement.checked) {
        agreement.setCustomValidity("Образованные живут дольше! Хорошо подумай!");
    } else {
        agreement.setCustomValidity("");
    }

    if (formRegistration.checkValidity()) alert('Форма валидна')

    formRegistration.reportValidity();
});