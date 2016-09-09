/**
 * Created by Kirill on 18.08.2016.
 */
$(document).ready(function() {

	$('.personal-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $('.prev-btn-personal'),
		nextArrow: $('.next-btn-personal'),
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.slider-items-left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-items-right'
	});
	$('.slider-items-right').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-items-left',
		dots: false,
		prevArrow: $('.prev-btn'),
		nextArrow: $('.next-btn'),
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.slider-about-machine').slick({
		sliderToShow: 1,
		sliderToScroll: 1,
		dots: false,
		nextArrow: $('.about-machine__next-btn'),
		autoplay: true,
		autoplaySpeed: 2500
	});
	$('.our-team-person').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.our-team-person-about',
		prevArrow: $('.prev-btn-team'),
		nextArrow: $('.next-btn-team'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.our-team-person-about').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.our-team-person',
		dots: false,
		arrows: false
	});
	$('.our-clients__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(".img-slider").customScrollbar({
		updateOnWindowResize: true
	});
	$(".map-container").customScrollbar({
		skin: "default-skin",
		hScroll: false,
		updateOnWindowResize: true
	});
});

