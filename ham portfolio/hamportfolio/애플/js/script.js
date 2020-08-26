$(function(){
		
		$(".n_cover ul li:nth-child(9) i").click(function(){
			$("nav .search").stop().delay(150) .fadeIn();
			$(".n_cover ul li:nth-child(1)").stop().fadeOut(450);
			$(".n_cover ul li:nth-child(2)").stop().fadeOut(400);
			$(".n_cover ul li:nth-child(3)").stop().fadeOut(350);
			$(".n_cover ul li:nth-child(4)").stop().fadeOut(300);
			$(".n_cover ul li:nth-child(5)").stop().fadeOut(250);
			$(".n_cover ul li:nth-child(6)").stop().fadeOut(200);
			$(".n_cover ul li:nth-child(7)").stop().fadeOut(150);
			$(".n_cover ul li:nth-child(8)").stop().fadeOut(100);
			$(".n_cover ul li:nth-child(9)").stop().fadeOut(50);
			$(".n_cover ul li:nth-child(10)").stop().fadeOut(50);
			
			$(".search .s_cover input").delay(350).css("width","500px").animate({
					"width":"550px"
			});
			
			
			$(".s_cover ul li a, .s_cover span").css("margin-left","300px").animate({
					"margin-left":0
					
			},900);
			
			return false;
			//$(".search .s_cover").addClass("on");
		});
		$(".search .s_cover > li:nth-child(3) i").click(function(){
			$("nav .search").stop().fadeOut();
			$(".n_cover ul li:nth-child(1)").stop().fadeIn(100);
			$(".n_cover ul li:nth-child(2)").stop().fadeIn(250);
			$(".n_cover ul li:nth-child(3)").stop().fadeIn(350);
			$(".n_cover ul li:nth-child(4)").stop().fadeIn(450);
			$(".n_cover ul li:nth-child(5)").stop().fadeIn(550);
			$(".n_cover ul li:nth-child(6)").stop().fadeIn(650);
			$(".n_cover ul li:nth-child(7)").stop().fadeIn(750);
			$(".n_cover ul li:nth-child(8)").stop().fadeIn(850);
			$(".n_cover ul li:nth-child(9)").stop().fadeIn(950);
			$(".n_cover ul li:nth-child(10)").stop().fadeIn(1000);
			
			return false;
		});
		
		
		$(".bn_cover > ul > .mbox1 a").click(function(){
			var d =$(".fulld").css("display");
			
			if(d=="none"){
				$(".fulld").stop().slideDown(750);
				}else{
				$(".fulld").stop().slideUp(700);
				}
			
			$(".bn_cover ul li:nth-child(3) >a").css("display","block").animate({
					"display":"none"
			});
			$(".bn_cover > ul > .mbox1").delay(750).toggleClass("on");
			
			return false;
		});
		
		
		
		$(window).resize(function(){
			var w = $(window).width();
			
			if(760<w){
				//$(".fulld > ul").css("display","none");
				$(".bn_cover > ul > .mbox1").removeClass("on");		
				$(".fulld").css("display","none");
			}
			
			return false;
		});
		
		
		
		
		
		// 동영상팝업
		
		$(".sec_cover .box2 .tbox2 a").click(function(){
			$(".pop").css("display","block");
			$(".pop .logo").fadeOut(1000);
			$(".pop .pop_cover").delay(500).fadeIn();
			$(".pop_cover video").off("muted");
			return false;
		});
		
		$(".pop span").click(function(){
			$(".pop").css("display","none");
		});
		
		
		
		
		
		
		$(".fulld .top_sc ul > li > input").click(function(){
			$(this).css("width","80%").animate({
			"width":"70%"
			},200)
			
			$(".fulld .top_sc > ul >span").delay(200).stop().fadeIn(500);
			
			
			$("nav").css("top","0").animate({
					"top":"-45px"
			});
			return false;
		});
		
		
		$(".fulld .top_sc > ul >span").click(function(){
			$(".fulld .top_sc ul > li > input").css("width","70%").animate({
			"width":"80%"
			},200);
			
			$(".fulld .top_sc > ul >span").stop().fadeOut(0);
			$("nav").css("top","-45px").animate({
					"top":"0"
			});
			return false;
		});
		
		
		
		
		$(".fox h4 > span").click(function(){
			var d = $(this).parent().next("ul").css("display");
			var w = $(".fox ul").css("widht");
			var i = $(this).parent("h4").index();
			
			if(d=="none"){
				
				$(this).addClass("on");
				$(this).parent().next("ul").stop().slideDown(50);
				
				$(this).parent().next("ul").children("li").children("a").css("margin-top","-5%").animate({
				"margin-top":"0%"
			});	
				}else{
					$(".fox span").removeClass("on");
				$(this).parent().next("ul").slideUp(50);
				$(this).parent().next("ul").children("li").children("a").css("margin-top","0%").animate({
				"margin-top":"-5%"
			});	
				}
				
			
			return false;
		});
		
		
		$(window).resize(function(){
			var w = $(window).width();
			
			if(767<w){
				$(".fox > ul").css("display","block");
				$(".fox h4 span").removeClass("on");
			}else if(760>w){
				$(".fox > ul").css("display","none");
			}
			
			return false;
		});
		
		
		
		
		//ibox 사진 돌아가는기능
		$(window).on("load", function(){
			var n = Math.floor(Math.random()*3);
			
			console.log(n);
			$(".imgbox .ibox_cover .ibox").eq(n).css("display","block");
		
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	});