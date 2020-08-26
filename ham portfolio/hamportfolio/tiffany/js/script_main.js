$(document).ready(function(){
	/*
	var h = $(window).height();
	$(".video_wrap").height(h);
	*/
	$(window).resize(function(){
		var h = $(window).height();
		$(".video_wrap").height(h);
		
		var w = $(window).width();
		
		if(w>800){
			$("#m_menu").css("display","none");
		}
	});
	
	$(window).trigger("resize");
	
	
	setTimeout(function(){
		
		$(".black_cover").fadeOut(600);
		$(".video_wrap video").trigger("play");
		
	},3000);
	
	
	/*$(".m_menu_btn").click(function(){
		$(this).toggleClass("on");
		
	});
	*/
	
	$(window).scroll(function(){
		var s = $(this).scrollTop();
		
		if(s>=$(window).height()){
			$("header").css({
				"position":"fixed",
				"top":"0"
			});
		}else{
			$("header").css({
				"position":"absolute",
				"top":"100%"
			});
		}
		
		
	});
	
	
	$(".m_menu_btn").click(function(){
		$("#m_menu").stop().fadeIn();
	});
	$(".mobile_close_btn").click(function(){
		$("#m_menu").stop().fadeOut();
	});
	
});



