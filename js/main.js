$(document).ready(function(){
    $('.footer-slider').slick({
        infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
  		nextArrow: ('.next-arrow'),
  		prevArrow: ('.prev-arrow'),
  		responsive: [{
      		breakpoint: 877,
      			settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
      			}
    		},
    		{
      		breakpoint: 640,
      			settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
      			}
    		},
    		{
      		breakpoint: 480,
      			settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
      			}
   			}
  		]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        // nextArrow: ('.next-arrow-ask'),
        // prevArrow: ('.prev-arrow-ask'),
        responsive: [{
            breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var first = $('.first-click');
    var second = $('.second-click');

    first.click(function(){
        $('.top-personal-area').fadeOut();
        $('.nav-tabs').fadeOut();
        setTimeout(function(){
            $('.personal-area-setting').fadeIn();
        }, 350)
    });
    second.click(function(){
        $('.personal-area-setting').fadeOut();
        $('.nav-tabs').fadeIn();
        setTimeout(function(){
            $('.top-personal-area').fadeIn();
        }, 350)
    });
});


    