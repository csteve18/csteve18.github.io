$(document).ready(function (){
	$('.navbar').find('.navoperations').hover(
		function(){
			$(this).children('.submenuops').slideToggle(10);
		}
	);
	$('.navbar').find('.navcgdev').hover(
		function(){
			$(this).children('.submenucgdev').slideToggle(10);
		}
	);
	var stickyNavTop = $('.navbar').offset().top;
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > stickyNavTop){
			$('.navbar').addClass('sticky');
		}
		else {
			$('.nav').removeClass('sticky');
		}
	};
	stickyNav();
	$(window).scroll(function(){
		stickyNav();
	});
});