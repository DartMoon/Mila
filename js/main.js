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

    $('.dev-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: ('.next-arrow-dev'),
        prevArrow: ('.prev-arrow-dev'),
        responsive: [{
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
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
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: true
        // nextArrow: ('.next-arrow2'),
        // prevArrow: ('.prev-arrow2'),
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


    var ClickArt = $('.open-block-art');
    var myImages = ['images/menu.png','images/exit.png'];
    var myOpens = $('.open-block-article');
    var i = 0;
    var openImages = $('.open-block-art>img');

    openImages.attr('src',myImages[i]);
    ClickArt.attr('data-click-state', 1);
    ClickArt.on('click',function(){
        if(ClickArt.attr('data-click-state') == 1) {
            ClickArt.attr('data-click-state', 0);
            i=1;
            openImages.attr('src', myImages[i]);
            myOpens.fadeIn(500);
            $(".category-art").resize();
        } else {
            ClickArt.attr('data-click-state', 1);
            i=0;
            openImages.attr('src', myImages[i]);
            myOpens.fadeOut(500);
        }
    });
});

$(function () {
    var element = $(".offer-cours"), display;
    $(window).scroll(function () {
        display = $(this).scrollTop() >= 200;
        display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 500);
    });
});




    