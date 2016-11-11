"use strict"

//jQuery

$(document).ready(function() {

	console.log('Sidan har laddats!');

	$("#sub").click(function() {
		//e.preventDefault();
		$(".submenu").slideToggle('slow');
		console.log('Länken klickas')
	});
	$(".roseText").mouseenter(function() {
		$( this).find('.slideInfo').slideToggle('slow');
		//$(".slideInfo", this).css({'display' : 'inline-block'});
		$('.roseTitle', this).css({'color' : 'black'});
		//alert('Hover registreras');
	});
	$('.roseText').mouseleave(function() {
		$(this).find('.slideInfo').slideToggle('slow');
		$('.roseTitle', this).css({'color' : '#fff'});
	});
	
});



//Functions
