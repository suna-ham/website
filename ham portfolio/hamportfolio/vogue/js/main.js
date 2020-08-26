$(document).ready(function(){
	$('.btnMenu').click(function(){
		$(this).fadeOut();//햄버거메뉴 사라짐
		$('nav').addClass('on');
		$('section').addClass('on');
	});
   
   $('nav ul li').click(function(){
	   $('nav').removeClass('on');//기울어진 nav 원래대로
	   $('.btnMenu').fadeIn();//햄버거메뉴 나타남
	   $('section').removeClass('on'); //기울어진 section 원래대로
	   
	   var i = $(this).index();
	   $('section > div').removeClass('on');
	   
	   $('section > div').eq(i).addClass('on');
	   
   });
   
	
});















