/*
    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.
*/
const btnColor = document.getElementById('getColor');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    let r = getRandomIntInclusive(0, 255),
        g = getRandomIntInclusive(0, 255),
        b = getRandomIntInclusive(0, 255);

    return `rgb(${r},${g},${b})`;
}

btnColor.addEventListener('click', () => {
    localStorage.setItem('color', getRandomColor() );
});
