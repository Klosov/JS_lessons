function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ConvertToJSON = ( response ) => response.json();

fetch('https://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
    .then( ConvertToJSON )
    .then(res1 => {
        return res1[getRandomIntInclusive(0, res1.length)];
    })
    .then(user => {
        return fetch('https://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
            .then(ConvertToJSON)
            .then(friends => {
                //console.log(user, friends);

                return new User(user.name, user.email, user.gender, friends[0].friends);
            })
    })

function User(name, email, gender, friends) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.friends = friends;

    let drawFriends = () => {
        let html = '';
        this.friends.forEach(elem => {
            html += `<li>${elem.name}</li>`;
        })

        return html;
    }

    let render = () => {
        let divHtml = `
            <h1>${name}</h1>
            <a href="mailto:${email}">${email}</a>
            <ul>${drawFriends()}</ul>
        `;

        let div = document.createElement('div');
        div.innerHTML = divHtml;

        document.body.appendChild(div);
    }

    render();
}


/*
  Задача:

  1. При помощи fetch получить данные:
     https://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     https://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка:
     1) нужно вызвать дополнительный fetch из текущего чейна.
     2) Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)
