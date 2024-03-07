<?php
//define('_INDEX_', true);
//if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
//include_once(G5_THEME_PATH.'/head.php');
?>

<!-- delete -->
<?php
include_once('/theme/new_dnc/head.php');
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="디앤씨컴퍼니" /> 
<title>디앤씨컴퍼니</title>
<!-- css -->
<link rel="stylesheet" href="/theme/new_dnc/common/css/header.css">
<link rel="stylesheet" href="/theme/new_dnc/common/css/footer.css">
<link rel="stylesheet" href="/theme/new_dnc/css/style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/theme/new_dnc/css/justifiedGallery.min.css">
<link rel="stylesheet" href="/theme/new_dnc/css/swiper-bundle.min.css">
<!-- script -->
<script src='/theme/new_dnc/js/jquery-3.7.0.min.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollToPlugin.min.js"></script>
<script src='/theme/new_dnc/js/swiper-bundle.min.js'></script>
<script src='/theme/new_dnc/js/jquery.justifiedGallery.min.js'></script>
<script src='/theme/new_dnc/js/main.js' defer></script>


<!-- //delete -->


<!-- 메인컨텐츠 -->
<!-- delete -->
<div id="wrap">
    <!-- header -->
    <header class="main-header <?php echo $page_class ?>">
        <div class="container">
            <!-- logo -->
            <div class="logo-box">
                <a href="/theme/new_dnc/">
                    <img src="/theme/new_dnc/img/main/logo(2).svg" alt="">
                </a>
            </div>
            <!-- menu -->
            <div class='menu-box'>
                <ul>
                    <li>
                        <a href="/theme/new_dnc/about/" >
                            디앤씨컴퍼니
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            종합홍보
                        </a>
                    </li>
                    <li>
                        <a href="/theme/new_dnc/design/" >
                            디자인
                        </a>
                    </li>
                    <li>
                        <a href="/theme/new_dnc/video/">
                            영상
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            행사
                        </a>
                    </li>
                    <li>
                        <a href="/theme/new_dnc/marketing/" >
                            마케팅
                        </a>
                    </li>
                    <li>
                        <a href="https://dncit.cafe24.com/" target='_blank'>
                            인테리어
                        </a>
                    </li>
                    <li>
                        <a href="/bbs/board.php?bo_table=0_notice" >
                            디앤씨컴퍼니 소식
                        </a>
                    </li>
                </ul>
            </div>
            <!-- side icon box -->
            <div class="side-icon-box">
                <ul>
                    <li>
                        <a href="#" class='menu-icon'>
                            <span class="line"></span>
                            <span class="line"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- nav.menu-wrap -->
            <nav class='nav-menu-wrap'>
                <div class="container">
                    <ul>
                        <!-- menu01 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    Home
                                </span>
                            </a>
                        </li>
                        <!-- menu02 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    About
                                </span>
                            </a>
                        </li>
                        <!-- menu03 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    Works
                                </span>
                            </a>
                        </li>
                        <!-- menu04 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    Career
                                </span>
                            </a>
                        </li>
                        <!-- menu05 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    News
                                </span>
                            </a>
                        </li>
                        <!-- menu06 -->
                        <li>
                            <a href="#">
                                <span class='hover-text'>
                                    Contact
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- //header -->
    <!-- //delete -->
    <div id='main-wrap-slider' class="swiper mySwiper">
        <div class="swiper-wrapper">
            <!-- slide1 -->
            <!-- 
            <div class="swiper-slide">
                <div class="section">
                    <div id='key-visual-slider' class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide key-slide key-slide-01">
                                <div class="container">
                                    <div class="title-box ani-desc01">
                                        <h2 class="title">
                                            <span>Draw your future</span>
                                            <span>Continue to think</span>
                                        </h2>
                                        <p>
                                            디앤씨는 끊임없이 생각합니다
                                        </p>
                                    </div>
                                </div>
                                <div class="bg-video-box">
                                    <iframe frameborder="0" src="https://www.youtube.com/embed/TcKGkzeuQWQ?si=EwgBYe7PPOknzTsY&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=TcKGkzeuQWQ&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="swiper-slide key-slide key-slide-02">
                                <div class="container">
                                    <div class="title-box ani-desc01">
                                        <h2 class="title">
                                            <span>Draw your future</span>
                                            <span>Continue to think</span>
                                        </h2>
                                        <p>
                                            디앤씨는 끊임없이 생각합니다
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide key-slide key-slide-03">
                                <div class="container">
                                    <div class="title-box ani-desc01">
                                        <h2 class="title">
                                            <span>Draw your future</span>
                                            <span>Continue to think</span>
                                        </h2>
                                        <p>
                                            디앤씨는 끊임없이 생각합니다
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination key-visual"></div>
                    </div>
                </div>
            </div>
            -->

            <!-- slide2 -->
            <div class="swiper-slide">
                <div class="section column">
                    <!-- left -->
                    <a href="#" class="work-link-box img01">
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                PUBLICITY
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                종합홍보
                            </p>
                        </div>
                    </a>
                    <!-- center -->
                    <a href="/theme/new_dnc/design.php" class="work-link-box img02 design-btn" >
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                DESIGN
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                디자인
                            </p>
                        </div>
                    </a>
                    <!-- right -->
                    <a href="#" class="work-link-box img03">
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                VIDEO
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                영상
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <!-- slide3 -->
            <div class="swiper-slide">
                <div class="section column">
                    <!-- left -->
                    <a href="#" class="work-link-box img04">
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                CONVENTION
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                행사
                            </p>
                        </div>
                    </a>
                    <!-- center -->
                    <a href="/theme/new_dnc/marketing.php" class="work-link-box img05" >
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                MARKETING
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                마케팅
                            </p>
                        </div>
                    </a>
                    <!-- right -->
                    <a href="https://dncit.cafe24.com/" class="work-link-box img06" target='_blank'>
                        <div class="work-link-txt-box ani-desc">
                            <p class="title">
                                INTERIOR
                                <span class="icon-box">
                                    <img src="/theme/new_dnc/img/main/arrow-img01.svg" alt="">
                                    <span>
                                        go to<br/>
                                        experience!
                                    </span>
                                </span>
                            </p>
                            <p class="desc">
                                인테리어
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <!-- slide4 -->
            <div class="swiper-slide">
                <!-- partners-section -->
                <div class="section partners-section">
                    <div class="container">
                        <!-- title -->
                        <div class="partners-title-box">
                            <h2>
                                Partners.
                            </h2>
                            <p>
                                고객만족을 최우선으로<br/>
                                고객의 입장에서 생각하고 행동합니다.
                            </p>
                        </div>

                        <!-- client list -->
                        <div id="partners-list-box">
                            <a href="#">
                                <img alt="caption for image 1" src="/theme/new_dnc/img/main/partners-logo01.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo02.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 1" src="/theme/new_dnc/img/main/partners-logo03.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo04.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 1" src="/theme/new_dnc/img/main/partners-logo05.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo06.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo07.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo08.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo09.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo10.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo11.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo12.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo13.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo14.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo15.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo16.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo17.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo18.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo19.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo20.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo21.png"/>
                            </a>
                            <!-- // -->
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo22.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo23.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo24.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo25.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo26.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo27.png"/>
                            </a>
                            <a href="#">
                                <img alt="caption for image 2" src="/theme/new_dnc/img/main/partners-logo28.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- slide5 -->
            <div class="swiper-slide">
                <!-- notice-section -->
                <div class="section notice-section">
                    <!-- background video -->
                    <div class="video-box">
                        <video src="https://newsletter1.cafe24.com/new_dnc/img/notice-bg.mp4" autoplay muted loop playsinline data-object-fit="cover"></video>
                    </div>
                    <div class="container">
                        <div class="notice-title-box">
                            <h2 class="title">
                                DNC People.
                            </h2>
                            <span class="comment">
                                함께 즐겁게 일하는 디앤씨의 일상을 공유 합니다.
                            </span>
                            <div class="btn-box">
                                <a href="/bbs/board.php?bo_table=notice_2">
                                    <span>
                                        디앤씨 소식
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        문의하기
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer -->
                <div class="section footer-section">
                    <div class="container">
                        <!-- back top -->
                        <a href="#" class="back-top-btn main-scroll">
                            <div class="arrow-icon-box">
                                <img src="/theme/new_dnc/img/main/arrow-img02.svg" alt="">
                            </div>
                            <span>
                                Back Top
                            </span>
                        </a>
                        <!-- copyright -->
                        <span class="copyrights">
                            <span>
                                2023 &copy; The DNC Company.All rights reserved.
                            </span>
                        </span>
                        <!-- privacy -->
                        <a href="#" class="privacy">
                            <span>
                                개인정보취급방침
                            </span>
                        </a>
                    </div>
                </div>
                <!-- //footer -->
            </div>

        </div>
        <div id='main-wrap-pagination' class="swiper-pagination"></div>
    </div>
<!-- delete -->
</div>
<!-- //delete -->


<!-- include_once(G5_THEME_PATH.'/tail.php'); -->