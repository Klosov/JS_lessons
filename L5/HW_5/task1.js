/*
  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

function Comment(name, msg, avatarUrl) {
    this.name = name;
    this.msg = msg;
    this.avatarUrl = avatarUrl;
    this.likes = 0;
}

function ShowComments(arrComments) {
    const div = document.createElement('div');
    div.setAttribute('id', 'CommentsFeed');

    document.body.appendChild(div);

    arrComments.forEach((value) => {
        let commentDiv = document.createElement('div');
        commentDiv.innerHTML = 'Name: ' + value.name + ' Message: ' + value.msg + '<img src="' + value.avatarUrl + '" alt="avatar" style="width:75px">';

        div.appendChild(commentDiv);
    })
}

const defaultSettings = {
    avatarUrl: 'avatar_default.jpg',
    increaseLikes: () => {
        return this.likes++;
    }
}

let myComment1 = new Comment('Mike', 'Cool video!', 'avatar.jpg');
let myComment2 = new Comment('Nick', 'The best!', 'avatar.jpg');
let myComment3 = new Comment('Petter', 'Perfecto', 'avatar_default.jpg');
let myComment4 = new Comment('Harry', 'Avada kedavra!', 'avatar.jpg');

const CommentsArray = [myComment1, myComment2, myComment3, myComment4];

/*let newMyCall = Comment.bind(defaultSettings);
newMyCall();*/

const test = new ShowComments(CommentsArray);