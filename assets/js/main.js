const menuBtn = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    mobile_menu.classList.toggle('open');
})

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

