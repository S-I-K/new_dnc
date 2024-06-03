$(document).ready(function(){
	$(".sh_lnb").mouseenter(function(){
		$(".sh_logo img").attr("src","/sh_img/hd/top_menu/logo_m.png");
		$("#shGnb").addClass("on");
	 	$(".sh_lnb_s").fadeIn(200);
		$(".sh_lnb_bg").fadeIn(200);	
		$(".sh_lnb_black").fadeIn(200);	
	}).mouseleave(function(){
		$(".sh_logo img").attr("src","/sh_img/hd/top_menu/logo.png");
		$("#shGnb").removeClass("on");
		$('.sh_lnb_s').stop().fadeOut(200);
	  	$('.sh_lnb_bg').stop().fadeOut(200);
		$(".sh_lnb_black").stop().fadeOut(200);	
	});
	
	var menu_btn = $('.full_menu_btn');
	var full_menu = $('.full_menu_wrap');
	var full_item =$('.full_item');
	menu_btn.click(function(){
		menu_btn.toggleClass('on');
		full_menu.toggleClass('full_menu_on');
		full_item.removeClass('off');
		$('ul',full_item).removeClass('on');
	});
	full_item.hover(function(){
		full_item.not($(this)).toggleClass('off');
		$('ul',this).toggleClass('on');
	});

    /* 반응형 [s] */
	$("#m_navBtn").click(function(){
		m++;
		if(m%2 == 1){
			$("#m_navBtn").addClass("on");
			$("#navWrap").fadeIn(300).addClass("on");	
		}else{
			navClose(); 
		}; 
	});	
	$("#topmenuM .m_bmenu").click(function(){
		$('.m_smenu').not($(this).next()).slideUp(200);
		$('.m_bmenu').removeClass('on');
		$(this).addClass('on')
		$(this).next().slideDown(200);
	});	

	m = 0;  
	function navClose() { 
		$("#m_navBtn").removeClass("on");
		$("#navWrap").fadeOut(300).removeClass("on");	
	}	
	/* 반응형 [e] */	
});

