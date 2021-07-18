// взять todolist из предыдущих домашек и реализовать сохранение всех записей на "сервер"
// используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться,
// при добалении записи она улетает на "серевер" и сохраняется

const btnAdd = document.getElementById('AddToDo'),
    toDoList = document.getElementById('toDoList'),
    newToDo = document.getElementById('newToDo'),
    url = 'http://localhost:3000/list';


getToDo = function () {
    let url = 'http://localhost:3000/list';

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        return response.json();
    }).then((data) => {
        let li = '';

        data.forEach(item => {
            li += `<li class="listItem">
                    <input type="checkbox" class="DoneCheckbox">
                    <input type="hidden" name="list_id" value="${item.id}">
                    <span class="TodoText ${item.status === 1 ? 'done' : ''}">${item.task}</span>
                    <button>Remove</button>
                </li>`
        });

        toDoList.insertAdjacentHTML('afterbegin', li);

        let allBtns = document.querySelectorAll('li.listItem>button');
        allBtns.forEach(btn => {
            btn.addEventListener('click', removeToDo);
        })
    })
};

removeToDo = function (e) {
    let id = e.target.closest('li').querySelector('input[name="list_id"]').value;

    e.target.closest('li').remove();

    fetch(url + '/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => {
        //location.reload();
    })
}

doneToDo = function (e) {
    let id = e.target.closest('li').querySelector('input[name="list_id"]').value;

    if (e.target.checked) {
        e.target.closest('li').classList.add('done');
    } else {
        e.target.closest('li').classList.remove('done');
    }

    fetch(url + '/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => {
        console.log(r)
    });
}

function insertToDB(task) {
    let id = Date.now();

    let data = {
        id: id,
        task: task,
        status: 0
    }

    let jsonData = JSON.stringify(data);

    fetch(url, {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => {
        console.log(r)
    });

    return id;
}

window.addEventListener("load", function () {
    getToDo();

    btnAdd.addEventListener('click', (e) => {
        if (newToDo.value === '' || newToDo.value.length < 5) return;

        let id = insertToDB(newToDo.value);

        const li = document.createElement('li'),
            input = document.createElement('input'),
            inputID = document.createElement('input'),
            span = document.createElement('span'),
            button = document.createElement('button');

        li.className = 'listItem';

        input.setAttribute('type', 'checkbox');
        input.className = 'DoneCheckbox';
        input.addEventListener('change', doneToDo);

        inputID.setAttribute('type', 'hidden');
        inputID.setAttribute('name', 'list_id');
        inputID.setAttribute('value', id);

        span.className = 'TodoText';
        span.innerText = newToDo.value;

        newToDo.value = "";

        button.innerText = 'Remove';
        button.addEventListener('click', removeToDo);

        li.appendChild(input);
        li.appendChild(inputID);
        li.appendChild(span);
        li.appendChild(button);

        toDoList.appendChild(li);
    });
});
