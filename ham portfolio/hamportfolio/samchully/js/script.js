$(function(){
	var visual = $('.photo2>li');
	var button = $('.btn2>li');
	var current=0;
	var id;
	
	
	button.click(function(){
	var	i=$(this).index();
		if(i==3){
			play(i);
		}else{
		button.removeClass('on');
		$(this).addClass('on');
		move(i);
		}
		return false;
	});
	
	function move(i){
		if(current==i) return;
		var cu = visual.eq(current);
		var ne = visual.eq(i);
		cu.css('left','0').stop().animate({left:'-100%'});
		ne.css('left','100%').stop().animate({left:'0'});
		current=i;
	}
 
	timer();
 
	function timer(){
		id=setInterval(function(){
			var n = current+1;
			if(n==3){
				n=0;
			}
			button.eq(n).trigger('click')
		},3000);
  
	}
 
	//$('.left2').mouseenter(function(){
	//	clearInterval(id);		
	//});
	//$('.left2').mouseleave(function(){
	//	timer();
	//});
	
	function play(i){
		if(button.eq(i).hasClass('active')==true){
			button.eq(i).removeClass('active');
			timer();
		}else{
			button.eq(i).addClass('active');	
			clearInterval(id);
   
		}
  
	}
	
	$('.center2 .news li').css('display','none');
	$('.center2 .news li').eq(0).css('display','block');
	
	$('.center2 .btn3 li').click(function(){
		i = $(this).index();

		$('.center2 .news li').eq(i).fadeIn(500);
		$('.center2 .news li').eq(i-1).fadeOut(500);
		
		$('.center2 .news li').css('display','none');
		$('.center2 .news li').eq(i).css('display','block');
		
		$('.center2 .btn3 li').removeClass('on');
		$(this).addClass('on');
		
		return false;
	});
	
	$('.center3 .bong li').css('display','none');
	$('.center3 .bong li').eq(0).css('display','block');
	
	$('.center3 .btn4 li').click(function(){
		i = $(this).index();

		$('.center3 .bong li').eq(i).fadeIn(500);
		$('.center3 .bong li').eq(i-1).fadeOut(500);
		
		$('.center3 .bong li').css('display','none');
		$('.center3 .bong li').eq(i).css('display','block');
		
		$('.center3 .btn4 li').removeClass('on');
		$(this).addClass('on');
		
		return false;
	});
	
	
	
	
	
	
	
	
	
});