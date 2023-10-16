console.log('ready to js');

$(()=>{
    console.log($);
    console.log('ready to jq');

    var swiper = new Swiper("#main-wrap-slider", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
            el: "#main-wrap-pagination",
            clickable: true,
        },
    });
    
    var swiper = new Swiper("#key-visual-slider", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        // effect: "fade",
        /* autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }, */
    });
    
});