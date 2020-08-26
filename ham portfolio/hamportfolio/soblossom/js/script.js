$(function(){
	$(".main_img .img li").eq(0).css('left','0');
	$(".main_img .img li").eq(0).siblings().css('left','100%');
	var i = 0;
	
	$('.next').click(function(){
		i++;
		if(i==4){
			i=0;
		}
		$(".main_img .img li").eq(i).css('left','100%').stop().animate({'left':0});
		$(".main_img .img li").eq(i-1).css('left','0%').stop().animate({'left':"-100%"});
		
	});
	$('.prev').click(function(){
		i--;
		console.log(i);
		if(i==-4){
			i=0;
		}
		$(".main_img .img li").eq(i).css("left","-100%").animate({
				"left":"0"
		});
		$(".main_img .img li").eq(i+1).css("left","0%").animate({
				"left":"100%"
		});
	});
	
	$(".m_menu_btn").click(function(){
			
			$(this).toggleClass("on");
			$(".m_header").toggleClass("on");
			
	});
	
	$(window).resize(function(){
		var h = $(window).height();
		$('.main_img').height(h);
		var imgh = $('.banner_img .gnb2 li img').height();
		$('.banner_img .gnb1').height(imgh);
		var w = $(window).width();
		
		if( w <= 910){
			
			
		}else{
			if($(".m_header").hasClass('on')==true){
				$(".m_menu_btn").removeClass('on');
				$(".m_header").removeClass('on');
			}
			
		}
		
		
		
	});
	$(window).trigger('resize');
	var n = 0;
	
	setInterval(function(){
		n++;
		if(n==2){
			n=0;
		}
		$('.banner_img .gnb1 li').eq(n).css('left','100%').animate({'left':0},500);
		$('.banner_img .gnb1 li').eq(n-1).css('left','0%').animate({'left':"-100%"},500);
		
	},3000);
	
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		
		if(s>99){
			$("header").addClass("on");
		}else{
			$("header").removeClass("on");
		}
		
	});
	
	
	
	
	
	
	
});