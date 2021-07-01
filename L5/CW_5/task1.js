/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

//const Train = new Object();
const train = {
    name: 'test',
    speed: 0,
    cntPass: 0,
    drive: function() {
        console.log(`Поезд ${this.name} везет ${ this.cntPass} со скоростью ${this.speed}`);
    },
    stop: function () {
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
    },
    pickUpPass: function(x) {
        this.cntPass += x;
    }
}