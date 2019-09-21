
/* Scroll */

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 107) {
        $('.content').addClass('scrolled');
    }
    if (scrolled <= 107) {
        $('.content').removeClass('scrolled');
    }
});

/*Mobile menu*/

document.querySelector('.open-menu').addEventListener('click', () => {
    document.querySelector('.menu_mobile').classList.add('active');
    document.querySelector('.close-menu').classList.add('close-menu-active');
})

document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.menu_mobile').classList.remove('active');
    document.querySelector('.close-menu').classList.remove('close-menu-active')
})
