console.log('ready to js');

$(()=>{
    console.log($);
    console.log('ready to jq');
    /* wrap-slider */
    var swiper = new Swiper("#main-wrap-slider", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
            el: "#main-wrap-pagination",
            clickable: true,
        },
    });
    /* key-visual-slider */
    var swiper = new Swiper("#key-visual-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination.key-visual",
            type: "progressbar",
        },
    });
    /* header */
    $('header').mouseenter(()=>{
        $('.logo-box img').attr('src', './img/logo_black.svg');
        $('.search-icon img').attr('src', './img/search-icon_black.svg');
    })
    .mouseleave(()=>{
        $('.logo-box img').attr('src', './img/logo.svg');
        $('.search-icon img').attr('src', './img/search-icon.svg');
    });
});