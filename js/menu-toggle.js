document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.desktop-nav');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('is-active');
    });
});
