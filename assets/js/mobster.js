;$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
    nav: true,
    dots: false,
    loop: true,
  });
});

wow = new WOW();

wow.init();

$(window).scroll(function(){
	var wScroll =$(this).scrollTop();

	// Ganti BG Navigasi
	$('.navbar').css({
		'background-color' : '#F3F1F5'
	});

});

