$(()=>{

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 100) { 
            $('#fix_tel').addClass('active');}
        else{
            $('#fix_tel').removeClass('active');}
        return false;
    });



    $('#mainVisual .slider_wrap').delay(300).animate({"opacity":"1","margin-right":"160px"},1200,'easeOutQuint');
    $('#mainVisual .diretions').delay(300).animate({"opacity":"1","margin-right":"0"},1200,'easeOutQuint');
    setTimeout(function() {
        $('#mainVisual .bg').addClass("on");
    },300);

    /* main mainVisual swiper */
    var swiper = new Swiper('#mainVisual .slider', {
        grabCursor: true,
        initialSlide: 0,
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        parallax: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed : 900,
        slideActiveClass : 'active',
        /* autoplay: {
        delay: 4000,
        }, */
        navigation: {
            prevEl: "#mainVisual .prev",
            nextEl: "#mainVisual .next",
        },	
        breakpoints: {
            768: {
                spaceBetween: 30,
            },	  
            1024: {
                spaceBetween: 60,
            },
        },	
    });


    /* video film-swiper */
    var swiper = new Swiper("#film-swiper01", {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        freeMode: true,
        allowTouchMove: false,
        speed: 8000,
        loopedSlides:4, //noSwiping : true,
        observer:true, observeParents:true,
        autoplay: {
            delay: 0,
            // disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper("#film-swiper02", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        freeMode: true,
        allowTouchMove: false,
        speed: 8000,
        loopedSlides: 4, //noSwiping : true,
        observer:true, observeParents:true,
        autoplay: {
            delay: 0,
            reverseDirection: true,
            // disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var atc01H = $("#atc01").offset().top/2;
        $(window).on("scroll",function(){
        if($(window).scrollTop() > atc01H) { 
            $('#atc01').addClass("on");
            $('#atc01 .tit_area').addClass("on");
            $('#atc01 .circle_wrap').addClass("on");
            $('#atc01 .circle .line').addClass("on");
        } else {
            $('#atc01').removeClass("on");
            $('#atc01 .tit_area').removeClass("on");
            $('#atc01 .circle_wrap').removeClass("on");
            $('#atc01 .circle .line').removeClass("on");
        }
        return false;
    });




    var ftLatest = new Swiper('#sh_ft .ft_latest', {
        loop: true,
        speed : 400,
        direction : 'vertical',
        navigation: false,
        autoplay: {
            delay: 3000,
        }
    });

    $("#sh_ft .ft_mn li:eq(0)").addClass("on")
    var active_w = $("#sh_ft .ft_mn li:eq(0)").width();
    $("#sh_ft .active").css("width",active_w);

    $("#sh_ft .ft_mn li").mouseenter(function(){
        var po_l = $(this).position().left;
        active_w = $(this).width();
        $("#sh_ft .active").css({"left": po_l,"width":active_w});
        $("#sh_ft .ft_mn li").removeClass("on"); 
        $(this).addClass("on");
    });

    $('.go_top ').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });








    /* 모바일 일 때 */
    if ( window.matchMedia("(max-width: 450px)").matches ) {
        /* 02 */
        $('#atc02').removeClass('pc');
        $('#atc02').addClass('mo');
        gsap.registerPlugin(ScrollTrigger);
        var atc02H = $("#atc02.mo").offset().top-100;
        $(window).on("scroll",function(){
            if($(window).scrollTop() > atc02H) { 
                $('#atc02.mo').addClass("on");
            } else {
                $('#atc02.mo').removeClass("on");
            }
            return false;
        });

        /* 03 */
        $('#atc03').removeClass('pc');
        $('#atc03').addClass('mo');
        
        gsap.to("#atc03 .left", {
            scrollTrigger: {
                pin: true,	
                scrub:true,
                trigger: "#atc03",
                start: "top top",
                end: "+=1700",
            },	
            y:0
        });	
        gsap.to("#atc03 .right", {
            scrollTrigger: {
                pin: true,	
                scrub: true,
                trigger: "#atc03",
                start: "top top",
                end: "+=1700",
            },	
            y:-750
        });	
        $(document).ready(function(){
            var atc03 = $("#atc03").offset().top;
            wH2 = window.innerHeight;
            $(window).on("scroll",function(){
                var scrt = $(window).scrollTop();
                if(scrt > atc03 - wH2) {
                    $('#atc03 ul').addClass("on")
                } else if(scrt < atc03) {
                    $('#atc03 ul').removeClass("on")
                }
                return false;
            });
        });
    /* PC 일 때 */
    }else{
        /* 02 */
        $('#atc02').removeClass('mo');
        $('#atc02').addClass('pc');
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#atc02.pc .bg", {
            scrollTrigger: {
                pin: true,	
                scrub: 0.3,
                trigger: "#atc02",
                start: "top top",
                end: "+=1800",
            },	
            scale:1,
        });	
        gsap.to("#atc02.pc .btxt", {
            scrollTrigger: {
                pin: true,	
                scrub: 0.3,
                trigger: "#atc02",
                start: "top top",
                end: "+=1800",
            },	
            left:'50%',color:'#fff'
        });	
        gsap.to("#atc02.pc .desc", {
            scrollTrigger: {
                pin: true,	
                scrub: 0.3,
                trigger: "#atc02",
                start: "top top",
                end: "+=1800",
            },	
            color:'#fff'
        });	

        /* 03 */
        $('#atc03').removeClass('mo');
        $('#atc03').addClass('pc');
        gsap.to("#atc03 .left", {
            scrollTrigger: {
                pin: true,	
                scrub:true,
                trigger: "#atc03",
                start: "top top",
                end: "+=1700",
            },	
            y:0
        });	
        gsap.to("#atc03 .right", {
            scrollTrigger: {
                pin: true,	
                scrub: true,
                trigger: "#atc03",
                start: "top top",
                end: "+=1700",
            },	
            y:-750
        });	
        $(document).ready(function(){
            var atc03 = $("#atc03").offset().top;
            wH2 = window.innerHeight;
            $(window).on("scroll",function(){
                var scrt = $(window).scrollTop();
                if(scrt > atc03 - wH2) {
                    $('#atc03 ul').addClass("on")
                } else if(scrt < atc03) {
                    $('#atc03 ul').removeClass("on")
                }
                return false;
            });
        });
    }


    $(window).resize(function(){ 
        document.location.reload();
    });
});