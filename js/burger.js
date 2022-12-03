let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let links = document.querySelectorAll(".nav__item");
let closeBurger =  document.querySelector(".burger-close");

burger.addEventListener('click', getBurgerMenu);
closeBurger.addEventListener("click", closeBurgerMenu);
links.forEach( (link) => {
    link.addEventListener("click", closeBurgerMenu)
});


function getBurgerMenu() {
    menu.classList.add("header__nav--active");
    document.body.classList.add("stop-scroll");
    searchFeild.classList.remove("header__search--active");
}

function closeBurgerMenu(event) {
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
}
