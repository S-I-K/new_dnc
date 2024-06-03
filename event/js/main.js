$(()=>{
    console.log('event main.js connection');
    var main_swiper = new Swiper("#event-main-swiper", {
        direction: "vertical",
        slidesPerView: 'auto',
        spaceBetween: 0,
        speed: 800,
        effect: 'slide',
        autoHeight: 'true',
        mousewheel: true,
        allowTouchMove: true,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            450: {
                freeMode: false,
                allowTouchMove: false,
            }
        },
        on: {
            activeIndexChange : function() {
                // if (this.realIndex >= (this.slides.length / 2 - 1)) {
                if (this.realIndex >= 1) {
                    $('.floating-box').css({
                        'opacity': '1',
                        'pointer-events': 'unset',
                    });
                    $('.sns-floating-box').css({
                        'opacity': '1',
                        'pointer-events': 'unset',
                    });
                } else {
                    $('.floating-box').css({
                        'opacity': '0',
                        'pointer-events': 'none',
                    });
                    $('.sns-floating-box').css({
                        'opacity': '0',
                        'pointer-events': 'none',
                    });
                }
            },
        }
    });


    var swiper = new Swiper("#event-content-small-swiper01", {
        slidesPerView: 'auto',
        spaceBetween : 0,
        direction: "vertical",
        allowTouchMove: false,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper("#event-content-small-swiper02", {
        slidesPerView: 'auto',
        spaceBetween : 0,
        direction: "vertical",
        allowTouchMove: false,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        },
    });
    var swiper = new Swiper("#event-content-large-swiper", {
        slidesPerView: 1,
        spaceBetween : 0,
        allowTouchMove: false,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper("#content-text-swiper", {
        slidesPerView: 'auto',
        spaceBetween : 0,
        allowTouchMove: false,
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loopedSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            activeIndexChange: function(){
                gsap.fromTo('.swiper-slide .text-box .title', {
                    y: 40,
                    opacity: 0,
                },{
                    y: 0,
                    opacity: 1,
                    duration: .6,
                    delay: .4,
                });
                gsap.fromTo('.swiper-slide .text-box .desc', {
                    y: 40,
                    opacity: 0,
                },{
                    y: 0,
                    opacity: 1,
                    duration: .6,
                    delay: .6,
                });
            }
        }
    });

    $('.back-top-btn.main-scroll').click(function(e){
        e.preventDefault();
        main_swiper.slideTo(0, 1200);
    });
})