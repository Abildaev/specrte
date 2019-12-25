$(document).ready(function () {

    $('.hamburger_trigger').on('click', function () {
        $('.header__menu').toggleClass('is-active');
        if (screen.width <= 960) {
            $(".content").toggleClass("scaled");
            $(".wrapper").toggleClass("fixed");
        }
    });


    function Scroll() {
        if (screen.width <= 960) {
            $(".content").toggleClass("scaled");
            $(".wrapper").toggleClass("fixed");
        };
            const target = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(target).offset().top
        });
    }


    $('.header__link').click(Scroll);


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

    function AddBack () {
        $(".contact__form").removeClass("is-active");
        $(".popup__input").removeClass("is-active");
        $(this).addClass("is-active");
    } ;

    $(".contact__form").on("click",AddBack);

    $(".popup__input").on("click", AddBack);


    $('.header__contact').magnificPopup();

    // $(window).scroll(function () {
    //     const distanceTop = $(".services").offset().top -100;
    //     if ($(window).scrollTop() > distanceTop) {
    //         $(".header__wrap").css(
    //             {
    //                 'position': 'fixed',
    //                 "width": "100%",
    //                 "transition": "0.5s",
    //                 "background": "#282958",
    //                 "z-index": "5"
    //             });
    //     } else
    //         $('.header__wrap').stop(true).css({"position": 'static', "background": "none" });
    // });


});
