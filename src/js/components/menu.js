$(document).ready(function(){
    const header = $('.js--header');
    const menuButton = $('.js--menu-button');
    const BODY = $('body');

    const changeHeaderOnScroll = () => {
        if(window.pageYOffset > 0) {
            header.addClass('scrolled')
        } else {
            header.removeClass('scrolled')
        }
    }
    changeHeaderOnScroll();

    window.addEventListener('scroll', () => {
        changeHeaderOnScroll();
    });

    menuButton.on('click', function() {
        menuButton.toggleClass('is-active');
        BODY.toggleClass('overflow-hidden');
        header.toggleClass('is-opened');

        $('.js--header-nav').slideToggle();
    });

    $(window).on('resize', function() {
        if($(window).width() >= 768) {
            $('.js--header-nav').removeAttr('style');
            menuButton.removeClass('is-active');
            BODY.removeClass('overflow-hidden');
            header.removeClass('is-opened');
        }
    })
}); 