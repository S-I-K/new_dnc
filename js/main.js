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
        /* spaceBetween: 0,
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
        }, */
    });
    /* header */
    $('header.main-header').mouseenter(()=>{
        $('header.main-header .logo-box img').attr('src', './img/logo_black.svg');
        $('header.main-header .search-icon img').attr('src', './img/search-icon_black.svg');
    })
    .mouseleave(()=>{
        $('header.main-header .logo-box img').attr('src', './img/logo.svg');
        $('header.main-header .search-icon img').attr('src', './img/search-icon.svg');
    });

    /* design page */
    $('.design-btn').click(()=>{
        if($('.design-wrap').hasClass('active')){
            $('.design-wrap').removeClass('active');
            $('.design-header').removeClass('active');
            $('.main-header').removeClass('hidden');
        }else{
            $('.design-wrap').addClass('active');
            $('.design-header').addClass('active');
            $('.main-header').addClass('hidden');
        }
    });


    /* a tag func remove */
    $('a').click(function(e){
        e.preventDefault();
    });
    $('a').attr('href', 'javascript:void(0)');
});