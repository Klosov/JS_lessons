/*
  localStorage
  window.localStorage
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    В отличие от куки, объекты веб-хранилища не отправляются на сервер при каждом запросе. Поэтому мы можем хранить гораздо больше данных. 
*/
//   console.log( window.localStorage );
// // // Запись в ЛС
// localStorage.setItem('myCat', 'Tom');
// localStorage.setItem('back', 'green');
// // // // Чтение с ЛС
// var cat = localStorage.getItem("myCat");
// // // // Удаление с ЛС
// localStorage.removeItem("myCat");
// console.log( cat );
// // // Если не найдено, вернет Null
// var background = localStorage.getItem('backasd');
// console.log(background);
// if( background !== null){
//   document.body.style.backgroundColor = background;
// }

// console.log( window.localStorage );

// let obj = {
//   name: 'Vasya',
//   learning: true
// }
// localStorage.setItem('user', JSON.stringify(obj) );
// console.log( JSON.parse( localStorage.getItem("user") ) );
// console.log( JSON.parse( localStorage.getItem("JSON") ) );

//// incognito window нет доступа
// Session storage - существует только в рамках текущей вкладки браузера.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

// sessionStorage.setItem('test', 1); // - выполнить в консоли
// alert( sessionStorage.getItem('test') ); - проверить обновив страницу и открыв в новой вкладке

// second example

// let myObj = [];

// class User {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;

//     myObj.push(this);
//   }
//   render(){
//     let node = document.createElement('div');
//         node.innerHTML = `
//           <h1>${this.name}</h1>
//           <h2>${this.age}</h2>
//         `;

//     document.body.appendChild(node);
//   }
// }

// let localUsers = localStorage.getItem('users');
// myObj = localUsers !== null 
//   ?
//     JSON.parse(localUsers).map( item => new User(item.name, item.age) ) 
//   :
//     [];

// console.log('local users or empty array:', myObj);

// document.addEventListener('DOMContentLoaded', () => {
//   const name = document.getElementById('name')
//   const age = document.getElementById('age')
//   const btn = document.getElementById('create')

//   btn.addEventListener('click', () => {
//     let nameVal = name.value;
//     let ageVal = age.value;

//     new User(nameVal, ageVal).render();
//     localStorage.setItem('users', JSON.stringify(myObj) );  
//   })

// })

// myObj.map( item => item.render() );

// console.log( myObj );
