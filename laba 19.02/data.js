let users = [

]

let carts = document.querySelector(".carts")

let tovar = [
    {
        "id":1,
        "price": 4000,
        "name": "Микроволновка"
    },
    {
        "id":2,
        "price": 5000,
        "name": "Микроволновка2"
    },
    {
        "id":3,
        "price": 6000,
        "name": "Микроволновка3"
    },
    {
        "id":4,
        "price": 7000,
        "name": "Микроволновка4"
    }
]

let corsina = [

]

let isAuth = false

const div = document.querySelector(".spa")
const header = document.querySelector(".header")
function headers(){
if (isAuth){
header.innerHTML = `
<a onclick="home_html()">Главная страница</a>
<a onclick="corsina_html()">Корзина</a>
<a onclick="logout()">Выйти</a>
`} else {
    header.innerHTML = `
    <a onclick="home_html()">Главная страница</a>
        <a onclick="register_html()">Регистрация</a>
        <a onclick="login_html()">Авторизация</a>
    `
}
}



function register_html(){
    carts.innerHTML = ''
    div.innerHTML = `
    <div class="reg">
    <h1>Регистрация</h1>
    <p>Никнейм</p>
        <input class="username" type="text" placeholder="Никнейм">
        <p>Пароль</p>
        <input class="password" placeholder="Пароль" type="password"  name="" id="">
        <p>Повтор пароля</p>
        <input class="password2" placeholder="Повтор пароля" type="password"  name="" id="">
        <button onclick="register()">Регистрация</button>
        </div>
    
    `
}

function register() {
    let reg = document.querySelector(".reg");
    let usernameInput = document.querySelector(".username");
    let passwordInput = document.querySelector(".password");
    let password2Input = document.querySelector(".password2");
    let username = usernameInput.value;
    let password = passwordInput.value;
    let password2 = password2Input.value;

    for (let user of users) {
        if (username == user.username) {
            reg.innerHTML += `
            <p class="red">Пользователь с таким никнеймом уже зарегистрирован</p>
            `;
        }
    }

    if (password != password2) {
        reg.innerHTML += `
        <p class="red">Пароли не совпадают</p>
        `;
    } else {
        users.push({
            "username": username,
            "password": password
        });
        login_html();
    }
}


function logout(){
    isAuth = false
}
function login_html(){
    carts.innerHTML = ''
    div.innerHTML = `
    <div class="reg">
    <h1>Авторизация</h1>
    <p>Никнейм</p>
        <input class="username" type="text" placeholder="Никнейм">
        <p>Пароль</p>
        <input class="password" placeholder="Пароль" type="password"  name="" id="">
        <button onclick="login()">Авторизация</button>
        </div>
    
    `
}

function login(){
    let reg = document.querySelector(".reg");
    let usernameInput = document.querySelector(".username");
    let passwordInput = document.querySelector(".password");
    let username = usernameInput.value;
    let password = passwordInput.value;
    for (let user of users){
        if (user.username == username || user.password == password){
            isAuth = true
            home_html()
            return; 
        }
    }
    reg.innerHTML += `
    <p class="red">Никнейм или пароль неверны</p> 
    `
}

setInterval(headers, 1000);

function home_html(){
    carts.innerHTML = ''
    if (isAuth){
        div.innerHTML = ''
        for (let tovar1 of tovar){
    carts.innerHTML += `
    <div class="cart">
    <img class="img" src="./80353-HOV_309_L01.jpg" alt="">
    <h3>${tovar1.name}</h3>
    <h4>Цена: ${tovar1.price} руб</h4>
    <a onclick="add_corsina(${tovar1.id})">Добавить товар в корзину</a>

    `}} else{
        div.innerHTML = ''
        for (let tovar1 of tovar){
    carts.innerHTML += `
    <div class="cart">
    <img class="img" src="./80353-HOV_309_L01.jpg" alt="">
    <h3>${tovar1.name}</h3>
    <h4>Цена: ${tovar1.price} руб</h4>
    `
    }
}}

function add_corsina(id){
    for (let tovars of tovar){
        if(tovars.id == id){
            corsina.push({
                "id": tovars.id,
                "name": tovars.name,
                "price": tovars.price
            })
        }
    }
}

function corsina_html(){
    div.innerHTML = ''
    carts.innerHTML = `
    <h1>Корзина</h1>
    `
    for (let cors of corsina){
        carts.innerHTML += `
        <div class="cart">
        <img class="img" src="./80353-HOV_309_L01.jpg" alt="">
        <h3>${cors.name}</h3>
        <h4>Цена: ${cors.price} руб</h4>
        `
        }
}

