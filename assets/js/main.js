const menuBtn = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobile_menu.classList.toggle('open');
})