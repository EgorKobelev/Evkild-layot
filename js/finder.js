let noActiveMagnifier = document.querySelector(".header__button--no-active-magnifier");
let searchFeild = document.querySelector(".header__search");
let activeMagnifier = document.querySelector(".header__button--active-magnifier");
noActiveMagnifier.addEventListener("click", getSearchField);
activeMagnifier.addEventListener("click", closeSearchField);

function getSearchField() {
    searchFeild.classList.add("header__search--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
}

function closeSearchField() {
    searchFeild.classList.remove("header__search--active");
}