"use strict"



var mq_device = window.matchMedia( "(max-width: 1024px)" );
var mq_desktop = window.matchMedia( "(min-width: 1025px)" );

if (mq_device.matches) {
	$(".roseText").click(function() {
		$( this).find('.slideInfo').toggle();
		//$('.roseTitle', this).css({'color' : 'black'});

	});
} else if (mq_desktop.matches) {
	$(".roseText").mouseenter(function() {
		$(this).find('.slideInfo').toggle();
		$(".slideInfo", this).css({'display' : 'block'});
		$('.roseTitle', this).css({'color' : 'black'});
		//alert('Hover registreras');
	});
	$('.roseText').mouseleave(function() {
		$(this).find('.slideInfo').toggle();
		$('.roseTitle', this).css({'color' : '#fff'});
	});
}

console.log('Sidan har laddats!');

$("#sub").click(function () {
	//e.preventDefault();
	$(".submenu").slideToggle('slow');
	console.log('Länken klickas')
});


//Functions
