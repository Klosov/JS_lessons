/*
    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }
  */

const allBtns = document.querySelectorAll('.buttonsHeader > .showButton'),
    allTabs = document.querySelectorAll('.tabContainer > .tab');


// Навесить всем кнопкам событие onclick
allBtns.forEach(btn => {
    btn.onclick = () => {
        hideAllTabs();

        allTabs.forEach(tab => {
            if (btn.dataset.tab === tab.dataset.tab) {
                tab.classList.toggle('active');
            }
        })
    }
});


function hideAllTabs() {
    allTabs.forEach(tab => {
        tab.classList.remove('active')
    })
}