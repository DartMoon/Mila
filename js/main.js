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


    