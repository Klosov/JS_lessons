/*
    Задание 3:

    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2
*/

const posts = document.getElementById('posts');

class Posts {
    likes = 0;

    constructor(_id, isActive, title, about, created_at) {
        this._id = _id;
        this.isActive = isActive;
        this.title = title;
        this.about = about;
        this.created_at = created_at;
    }

    addLike(id) {
        this.likes++
        console.log('Likes: ' + this.likes);
    }

    render() {
        return `<div style="width:250px;">
                    <h2>${this.title}</h2>
                    <small>${this.created_at}</small>
                    <small>${this.isActive}</small>
                    <p>${this.about}</p>
                    <input type="hidden" name="_id" value="${this._id}">
                </div>`;
    }
}



(function getData() {
    fetch('https://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = '';
            data.forEach( (post) => {
                window[post._id] = new Posts(post._id, post.isActive, post.title, post.about, post.created_at);
                html += window[post._id].render();
            });

            posts.innerHTML = html;
        });
})();