const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menuList = document.querySelector('.menu-list');

mobileMenuIcon.addEventListener('click', function () {
  menuList.classList.toggle('show-mobile');
});