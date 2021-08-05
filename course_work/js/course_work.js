/*
    Каждое сообщение можно:

    Показать полностью (если больше 500 знаков)
    Лайкнуть (с подсчетом лайков)
    Показать все коментарии
    Написать комментарий
*/
const postForm = document.getElementById('postForm');
const postContainer = document.getElementById('posts');
let posts = [];

class Post {
    constructor(author, about, imgUrl, comments, likes, _id, created_at) {
        this._id = _id ? _id : Date.now();
        this.author = author;
        this.about = about;
        this.imgUrl = imgUrl;
        this.comments = comments;
        this.likes = likes ? likes : 0;
        this.created_at = created_at ? created_at : this.joinDate(new Date, '-');

        this.addLike = this.addLike.bind(this);
        this.showCommentForm = this.showCommentForm.bind(this);
        this.sendCommentForm = this.sendCommentForm.bind(this);
        this.showComments = this.showComments.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);

        this.render();
    }

    addLike() {
        this.likes++;

        const like = document.querySelector(`div[data-id="${this._id}"] span.count`);

        like.innerHTML = this.likes;

        posts.forEach( post => {
            if (post._id === this._id) {
                post.likes = this.likes;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    };

    showCommentForm() {
        const post = document.querySelector(`div[data-id="${this._id}"]`);
        const cntCommentForm = document.querySelectorAll('form[name="add_comment_form"]').length;

        let form = `
            <form action="/" class="row" name="add_comment_form">
                <label class="col-12">
                  <input type="text" name="author" class="col-12" placeholder="Name">
                </label>
                <label class="col-12">
                  <textarea name="text" class="col-12" cols="20" rows="5" placeholder="Comment"></textarea>
                </label>
                <div class="col-12">
                    <button type="submit" class="btn btn-warning w-100">Send comment</button>
                </div>
            </form>
        `;

        if (cntCommentForm > 0 ) {
            let commentForm = document.querySelector('form[name="add_comment_form"]');
            commentForm.parentElement.removeChild(commentForm);

        } else {
            post.insertAdjacentHTML('beforeend', form);

            let commentForm = document.querySelector('form[name="add_comment_form"]');
            commentForm.addEventListener('submit', this.sendCommentForm);
        }
    }

    sendCommentForm(e) {
        e.preventDefault();

        this.comments.push({
            author: e.target.author.value,
            text: e.target.text.value,
            date: this.joinDate(new Date, '-')
        });

        e.target.reset();

        const cntComment = document.querySelector(`div[data-id="${this._id}"] span.count_comments`);

        cntComment.innerText = this.comments.length;

        posts.forEach( post => {
            if (post._id === this._id) {
                post.comments = this.comments;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));

        this.showComments();
    }

    showComments() {
        const post = document.querySelector(`div[data-id="${this._id}"]`);

        const oldComments = post.querySelectorAll('.comment');
        oldComments.forEach(elem => {
            elem.parentElement.removeChild(elem);
        })

        let commentHTML = '';

        this.comments = this.comments.reverse();

        this.comments.forEach(function (comment) {
            commentHTML += `
                <div class="comment">
                    <div class="comment-author">${comment.author}</div>
                    <div class="comment-date">${comment.date}</div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `;
        });

        post.insertAdjacentHTML('beforeend', commentHTML);
    }

    toggleDescription() {
        document.querySelector(`div[data-id="${this._id}"] .about`).classList.toggle('about_collapsed');
    }


    render() {
        let block = document.createElement('div');
        block.dataset.id = this._id;
        block.className = 'post col-12';

        let toggleClass = '',
            toggleBtn = '';

        if (this.about.length > 500) {
            toggleClass = 'about_collapsed';
            toggleBtn = '<button class="btn btn-sm btn-link about_toggle" type="button"><span>Show more</span></button>';
        }

        let context = `
            <div class="post_info">
                <a href="#" class="author">${this.author}</a>
                <span class="created_at">${this.created_at}</span>
            </div>        
            
            <img class="img_url" src="${this.imgUrl}" alt="post image" height="150" width="300">
            
            <div class="about ${toggleClass}">
              <p>${this.about}</p>
            </div>
            
            ${toggleBtn}
            
            <div class="post-actions">
                <button type="button" class="btn btn-info like">
                  <span class="heart-like">&#x2764;</span>
                  <span><i>likes: <span class="count">${this.likes}</span></i></span>
                </button>
        
                <button type="button" class="btn btn-light show_comments">
                  <span><i>Comments(<span class="count_comments">${this.comments.length}</span></i>)</span>
                </button>
        
                <button type="button" class="btn btn-warning add_comment" style="background-color:#FEF5CC;border-color: #FEF5CC;">
                  <span>Write Comment</span>
                </button>
            </div>
        `;

        block.innerHTML = context;

        let likeBtn = block.querySelector('.like');
        likeBtn.addEventListener('click', this.addLike);

        let showCommentBtn = block.querySelector('.show_comments');
        showCommentBtn.addEventListener('click', this.showComments);

        let commentBtn = block.querySelector('.add_comment');
        commentBtn.addEventListener('click', this.showCommentForm);

        if (this.about.length > 500) {
            let collapseBtn = block.querySelector('.about_toggle');
            collapseBtn.addEventListener('click', this.toggleDescription);
        }

        postContainer.prepend(block);
    };

    joinDate(time, separator) {
        let plural = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];

        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(time);
        }
        return plural.map(format).join(separator);
    };
}

const GetSavedPosts = () => {
    let data = localStorage.getItem('posts');

    if (data !== null) {
        posts = JSON.parse(data);
        return posts;
    }

    return null;
}

postForm.addEventListener('submit', e => {
    e.preventDefault();
    let post = new Post(postForm.author.value, postForm.about.value, postForm.image_url.value, []);
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));

    postForm.reset();
});

let postsLS = GetSavedPosts();
if (postsLS !== null) {
    postsLS.forEach(function (post) {
        new Post(post.author, post.about, post.imgUrl, post.comments, post.likes, post._id, post.created_at);
    })
}
