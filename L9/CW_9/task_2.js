/*
    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678
*/
const form = document.getElementById('loginForm'),
    logoutBtn = document.getElementById('logout'),
    loginData = localStorage.getItem("loginData");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.email.value === 'admin@example.com' && form.password.value === '12345678') {
        let data = {
            name: form.email.value,
            age: form.password.value
        }

        let jsonData = JSON.stringify(data);

        localStorage.setItem('loginData', jsonData);
        location.reload();
    } else {
        alert('Wrong password or Email!');
        return false;
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("loginData");

    location.reload();
});

if (loginData) {
    form.style.display = 'none';
    document.querySelector('h1').innerText = `Привет, ${JSON.parse(loginData).name}!`;
}

