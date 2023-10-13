console.log('ready to js');

$(()=>{
    console.log($);
    console.log('ready to jq');

    var swiper = new Swiper("#main-wrap-slider", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});