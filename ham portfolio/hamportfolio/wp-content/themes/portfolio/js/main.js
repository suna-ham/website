$(function () {
    //logo
    if ($('.body').hasClass('index')) {
        $('.dark_logo a').fadeOut();

        var home_height = $('.mainhome').outerHeight();

        $(window).scroll(function () {
			
			console.log(home_height);
            if (home_height - 100 < $(this).scrollTop()) {
                $('.logo a').fadeOut();
                $('.dark_logo a').fadeIn();
              
            } else {
                $('.logo a').fadeIn();
                $('.dark_logo a').fadeOut();
              
            }
        });
    }

    //nav
    if ($('.body').hasClass('index')) {
        var nav = $('.nav_menu li'),
            section = $('main section');

        nav.click(function (e) {
            e.preventDefault();

            var index = $(this).index(),
                section_offset = section.eq(index).offset().top;

            $('html,body').animate({
                scrollTop: section_offset
            });

            $(this).addClass('on').siblings().removeClass('on');
        });
    }else{
        $('.nav').css({'background':'#c9ce1ab'});
    }
    //skills
    if($('.body').hasClass('index')){
        $(window).scroll(function () {

            if ($('.about').offset().top - 150 < $(this).scrollTop()) {
                var skill_bar = $('.skill_bar');

                skill_bar.parent().each(function () {

                    var bar = $(this).find('.bar'),
                        rate = $(this).find('.rate'),
                        data_rate = rate.attr('data-rate');

                    bar.stop().animate({
                        'width': data_rate + '%'
                    }, 2500);

                    var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
                    rate.animateNumber({
                            number: data_rate,
                            numberStep: percent_number_step
                        },
                        2500
                    );
                
                }); //skill_bar each

                $('.bar').easyPieChart({
                    size:160,
                    barColor:'#9ce1ab',
                    scaleColor:false,
                    lineWidth:13,
                    trackColor:'#774631',
                    /*lineCap:'circle',*/
                    animate:2000
                    });
                //expertise 
                $('.expertise >div').addClass('on');
            } else {
                $('.expertise >div').removeClass('on');
            }

        });
    }
    //work

	var pagination=$('.pagination');

	function setPagination(){
	 pagination.jPages({
     containerID: 'work_panel',
     perPage: 3,
     startPage: 1,
     startRange: 1,
     midRange: 5,
     endRange: 5,
     first: false,
     last: false

	 });
	}

	function destroyPagination() {
	  pagination.jPages('destroy');
	};

	setPagination();



	var tabmenu = $('.work_anchor li');

    if ($('.work_panel').length) {
        var mixer = mixitup('.work_panel', {
            selectors: {
                target: '.mix'
            },
            "animation": {
                "duration": 250,
                "nudge": true,
                "reverseOut": false,
                "effects": "fade scale(0.01) translateX(20%) translateZ(-100px)"
            },
			callbacks: {
			 onMixStart: function(state,futureState ){
				destroyPagination();
			 },
			 onMixEnd: function(state, futureState){
				setPagination();
			 }
			}
        }); //mixitup
    }

    tabmenu.click(function (e) {
        e.preventDefault();
        var datafilter = $(this).attr('data-filter');

        mixer.filter(datafilter);
        $(this).addClass('on').siblings().removeClass('on');
    });

    tabmenu.eq(0).trigger('click');

//subpage
	if(!$('.body').hasClass('index')){
		var portfolio_content_offset=$('.portfolio_content').offset().top;
		console.log(portfolio_content_offset);

		$(window).scroll(function () {
			if(portfolio_content_offset +100 < $(this).scrollTop()){
				$('.ppt').addClass('on');
			}

		});
    }
		

    if($('.ppt img').attr('src')==""){
        $('.portfolio_proposal').hide();
    }
//reponsive
    $('.hamburger_button').click(function(e){
        e.preventDefault();

        $(this).toggleClass('on');
        $('.nav').toggleClass('on');
    });

	if($(window).width()<480){
		function setPagination(){
		 pagination.jPages({
		 containerID: 'work_panel',
		 perPage:2,
		 startPage: 1,
		 startRange: 1,
		 midRange: 2,
		 endRange: 2,
		 first: false,
		 last: false
	    });
	}

		$(window).scroll(function () {
			if(portfolio_content_offset < $(this).scrollTop()){
				$('.ppt').addClass('on');
			}
		});

	}
}); //ready