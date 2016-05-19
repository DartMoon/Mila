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
        arrows: true,
        nextArrow: ('.next-arrow-ask'),
        prevArrow: ('.prev-arrow-ask'),
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

    $('.first-tabs-top-slider').slick({
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: ('.next-arrow2'),
        prevArrow: ('.prev-arrow2'),
        responsive: [{
            breakpoint: 767,
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

    
    $(document).ready (function () {
        var ClickArt = $('.open-block-art');
        var myImages = ['images/menu.png','images/exit.png'];
        var myOpens = $('.open-block-article');
        var clickClosed = $('.dop-click');
        var i = 0;
        var openImages = $('.open-block-art>img');

        openImages.attr('src',myImages[i]);

        ClickArt.click(function () {

                    i=1;

                    openImages.attr('src', myImages[i]);
                    myOpens.fadeIn(500);
                    $(".category-art").resize();
            clickClosed.css({"display":"block"});

            
        });


        clickClosed.click(function () {

                            i=0;
                            openImages.attr('src', myImages[i]);
                            myOpens.fadeOut(500);

            clickClosed.css({"display":"none"});


                        });






            // if (imagesCount=1){
            //     ClickArt.click(function () {
            //         imagesCount1 = 0;
            //         myOpens.fadeOut(500);
            //     });
            // };


    });


    
});


    