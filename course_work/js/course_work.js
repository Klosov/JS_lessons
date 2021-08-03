const postForm = document.getElementById('postForm');
const postContainer = document.getElementById('posts');
let posts = [];

class Post {
    constructor(author, about, imgUrl, likes, _id, created_at) {
        this._id = _id ? _id : new Date();
        this.author = author;
        this.about = about;
        this.imgUrl = imgUrl;
        this.likes = likes ? likes : 0;
        this.created_at = created_at ? created_at : new Date();

        this.addLike = this.addLike.bind(this);
        this.render();
    }

    addLike() {
        this.likes++;

        const like = document.querySelector(`[data-id="${this._id}"].count`);
        like.innerHTML = this.likes;

        posts.forEach( post => {
            if (post._id === this._id) {
                post.likes = this.likes;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    };

    render() {
        let block = document.createElement('div');
        block.dataset.id = this._id;
        block.className = 'post col-12';

        if (this.isActive) {
            block.classList.add('active');
        }

        let context = `
                <div class="post_info">
                    <a href="#" class="author">${this.author}</a>
                    <span class="created_at">${this.created_at}</span>
                </div>        
                
                <img class="img_url" src="${this.imgUrl}" alt="post image" height="150" width="300">
                
                <div class="about">
                    <p>${this.about}</p>
                </div>
                
                <div class="post-actions">
                    <button type="button" class="btn btn-info like">
                      <span class="heart-like">&#x2764;</span>
                      <span><i>likes: <span class="count">${this.likes}</span></i></span>
                    </button>
            
                    <button type="button" class="btn btn-light">
                      <span><i>Comments(<span class="count_comments">${this.likes}</span></i>)</span>
                    </button>
            
                    <button type="button" class="btn btn-warning" style="background-color:#FEF5CC;border-color: #FEF5CC;">
                      <span>Write Comment</span>
                    </button>
                </div>
            `;

        block.innerHTML = context;

        let likeBtn = block.querySelector('.like');
        likeBtn.addEventListener('click', this.addLike);

        postContainer.prepend(block);
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
    let post = new Post(postForm.author.value, postForm.about.value, postForm.image_url.value);
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));

    postForm.reset();
});

let postsLS = GetSavedPosts();
if (postsLS !== null) {
    postsLS.forEach(function (post) {
        new Post(post.isActive, post.title, post.about, post.likes, post._id, post.created_at);
    })
}

