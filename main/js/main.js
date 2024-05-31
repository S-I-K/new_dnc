console.log('ready to js');

$(()=>{
    console.log($);
    console.log('ready to jq');


    /* qna list btn click event */
    $('.qna-list-btn').click(function(e){
        if($('.accodion-list-wrap').hasClass('visible')) {
            $('.accodion-list-wrap').removeClass('visible');
        }else{
            $('.accodion-list-wrap').addClass('visible');
        }
    });

    /* nav event */
    $nav_menu_wrap = $('nav.nav-menu-wrap');
    $hover_text = $('.hover-text');
    $hover_text.each(function(){
        $(this).attr('data-hover', $(this).text());
    });

    /* button effect */
    $button_effect = $('.button-effect');
    $button_effect.each(function(){
        $(this).attr('data-hover', $(this).text());
    });


    const logo_src = $('.logo-box > a > img').attr('src');
    /* menu event */
    $menu_icon = $('.menu-icon');
    $menu_icon.click(function(e){
        e.preventDefault();
        if(!$nav_menu_wrap.hasClass('open')){
            $nav_menu_wrap.addClass('open');
            $('.logo-box > a > img').attr('src', '/theme/new_dnc/img/main/logo-white.svg');
            $('.menu-box').addClass('nav-white');
            $('.side-icon-box').addClass('nav-white');
            $('.burger-box').addClass('active');
            $('.menu-box').addClass('hide');
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 0,
                    y: "100%",
                },{
                    opacity: 1,
                    y: "0%",
                    duration: .8,
                    delay: (index + 1) * .2,
                });
            })
        }else{
            setTimeout(()=>{
                $('.logo-box > a > img').attr('src', logo_src);
                $nav_menu_wrap.removeClass('open');
                $('.menu-box').removeClass('nav-white');
                $('.side-icon-box').removeClass('nav-white');
                $('.burger-box').removeClass('active');
                $('.menu-box').removeClass('hide');
            }, 2000);
            $menu_texts = gsap.utils.toArray($hover_text);
            $menu_texts.forEach( (text, index) => {
                gsap.fromTo(text, 1, {
                    opacity: 1,
                    y: "0%",
                },{
                    opacity: 0,
                    y: "-100%",
                    duration: .8,
                    delay: (index + 1) * .2,
                });
            })
        }
    });

    $hover_text.mouseenter(function(e){
        $hover_text.css({
            opacity: .4,
        });
        $(this).css({
            'transform': 'translateY(-100%)',
            'transform-origin': '0% 0%',
            'opacity': 1,
        });
    })
    .mouseleave(function(){
        $(this).css({
            'transform': 'translateY(0%)',
            'transform-origin': '0% 0%'
        });
        $hover_text.css({
            opacity: 1,
        });
    });

    /*=====================
    Swiper
    =====================*/
    /* wrap-slider */
    var main_swiper = new Swiper("#main-wrap-slider", {
        direction: "vertical",
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: true,
        autoHeight: true,
        resistance : false,
        speed: 800,
        observer : true,
        observeParents : true,
        centeredSlides: false,
        mousewheelControl: true,
        effect: 'slide',
        mousewheel: {
            releaseOnEdges: true,
        },
        pagination: {
            el: "#main-wrap-pagination",
            clickable: true,
        },
        on: {
            reachEnd: function () {
            },
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
        },
        
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 400) {
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
    });

    $('.back-top-btn.main-scroll').click(function(e){
        e.preventDefault();
        main_swiper.slideTo(0, 1200);
    });
    $('.back-top-btn.sub-scroll').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1800,)
        return false;
    });

    /* history swiper */
    var swiper = new Swiper("#history-slider", {
        spaceBetween: 0,
        slidesPerView: '2',
        speed: 1000,
        loop: true,
        breakpoints: {
            450: {
                slidesPerView: '4',
            }
        }
    });


    $("#img-list-box").justifiedGallery({
        rowHeight: 410,
        maxRowHeight: 820,
        lastRow: 'justify',
        margins: 24,
        randomize: false,
        captions: false,
    });
    $("#img-list-box.publicity").justifiedGallery({
        rowHeight: 420,
        maxRowHeight: 900,
        lastRow: 'justify',
        margins: 24,
        randomize: true,
        captions: false,
    });
    $("#partners-list-box").justifiedGallery({
        rowHeight: 55,
        maxRowHeight: 0,
        lastRow: 'justify',
        margins: 24,
        randomize: false,
        captions: false,
    });


    /*=====================
    GSAP
    =====================*/
    gsap.registerPlugin(ScrollTrigger);
    $titles = gsap.utils.toArray('.board-content-title > a');
    $titles.forEach(title => {
        gsap.to(title, {
            'transform': 'translateY(0px)',
            'opacity': 1,
            'background-size': '100% 100%',
            'duration': 2,
            'ease': 'ease',
            scrollTrigger: {
                markers: false,
                trigger: title,
                start: '-20% 100%',
                end: 'top 70%',
                scrub: 2,
                // toggleClass: 'active',
            }
        })
    });

    gsap.fromTo('.gsap-fadeup-01', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: .8,
    });

    gsap.fromTo('.gsap-fadeup-02', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1,
    });

    gsap.fromTo('.gsap-fadeup-03', {
        y: 20,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: .4,
        delay: 1.2,
    });

    gsap.fromTo('.gsap-opacity-01', {
        opacity: 0,
    },{
        opacity: 1,
        duration: 1,
        delay: 1.2,
    });


    $parallax_img = gsap.utils.toArray('.about-content-wrap .bg-img-box > img');
    $parallax_img.forEach(img => {
        gsap.fromTo(img, {
            y: '-20%',
        }, {
            'ease': 'ease',
            'duration': .4,
            y: '20%',
            scrollTrigger: {
                markers: false,
                trigger: img,
                start: '20% 100%',
                end: '240% 0%',
                scrub: 1,
                // toggleClass: 'active',
            }
        })
    });
    
    /* GSAP 반응형 코드 */
    /* ScrollTrigger.matchMedia({
        '(max-width: 450px)':()=>{
            $parallax_img = gsap.utils.toArray('.about-content-wrap .bg-img-box > img');
            $parallax_img.forEach(img => {
                gsap.fromTo(img, {
                    y: '-20%',
                }, {
                    'ease': 'ease',
                    'duration': .4,
                    y: '20%',
                    scrollTrigger: {
                        markers: true,
                        trigger: img,
                        start: '20% 100%',
                        end: '240% 0%',
                        scrub: 1,
                        // toggleClass: 'active',
                    }
                })
            });
        },
    }); */






    /* a tag func remove */
    // $('a').click(function(e){
    //     e.preventDefault();
    // });
    // $('a').attr('href', 'javascript:void(0)');

    /*
    hash-text-box 안의 span에 마우스를 올렸을 때
    해당 span의 인덱스값을 참조해서
    hash-img-box 안의 img에 클래스를 추가.
    */
    $hash_text = $('.hash-text-box span');
    $hash_img = $('.hash-img-box .hash-img');

    // console.log($hash_text);
    // console.log($hash_img);

    $hash_text.mouseenter(function(e){
        $this_hash_img = $hash_img.eq($(this).index());

        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().css({
                'opacity': .4,
            });
            $this_hash_img.addClass('active');
        }else {

        }
    })
    .mouseleave(function(){
        $hash_text.css({
            'opacity': 1,
            'color': '#fff',
        })
        $hash_text.removeClass('active');
        $hash_img.removeClass('active');
    });




    let lastScrollTop = 0;
    const delta = 15;

    $(window).scroll(function(event){
        const st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) return;

        if((st > lastScrollTop) && (lastScrollTop > 0)) {
            $('header').addClass('header-hide');
        }else{
            $('header').removeClass('header-hide');
        };
        lastScrollTop = st;
    });

});



const lenis = new Lenis();
lenis.on('scroll', (e) => {
    // console.log(e);
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// AOS.init();