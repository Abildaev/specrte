$(document).ready(function () {

    $('.header__hamburger_trigger').on('click', function (){

        $('.header__menu').toggleClass('is-active');
        $('.header__hamburger_trigger > span').toggleClass('is-active');
    });

    $('a[href^="#"]').click(function () {
        const target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top -50
        }, 1000)
        $('.header__menu').toggleClass('is-active');
        $('.header__hamburger_trigger > span').toggleClass('is-active');
    });


    $('.slider-1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            }
        }
    });



    $(".slider__portfolio").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,

            }
        }
    });

    $(".contact__form").on("click", function () {
        $(".contact__form").removeClass("is-active");
        $(this).addClass("is-active");

    })

    $(window).scroll(function () {
        const distanceTop = $(".services").offset().top -100;
        if ($(window).scrollTop() > distanceTop) {
            $(".header__wrap").css(
                {
                    'position': 'fixed',
                    "width": "100%",
                    "transition": "0.5s",
                    "background": "#282958",
                    "z-index": "5"
                });
        } else
            $('.header__wrap').stop(true).css({"position": 'static', "background": "none" });
    });


    $( '.navTrigger' ).click(function() {
        $('.content').toggleClass( 'scaled' );
    });



});
