/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'


function createCard() {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => data.forEach(element => {

            const randomUser = element;

            const img = document.createElement('img');
            img.classList.add('img-place');
            img.src = randomUser.avatar_url;
            img.alt = `${randomUser.login} profile foto`

            const nickname = document.createElement('p').innerText = randomUser.login;
            const nicknameDiv = document.createElement('div');
            nicknameDiv.classList.add('user-login')

            const article = document.createElement('article');
            article.classList.add('card');

            const container = document.querySelector('#output');

            nicknameDiv.append(nickname);
            article.append(img, nicknameDiv);
            container.append(article);

            const message = document.querySelector('.message');
            message.classList.add('message-out')
        }))
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', createCard)

