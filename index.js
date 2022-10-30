$(function() {
	$('span').fadeIn(2000);

	$('.menu-btn').click(function(){
		$('nav ul').animate({width:'show'});
		$('nav ul li span').show();
		$('nav').fadeIn();
	});

	$('nav').click(function(){
		$('nav ul').animate({width:'hide'});
		$('nav ul li span').hide();
		$('nav').fadeOut();
	});
	
	$('#All-btn').click(function(){
		$('.sub_1').show();
		$('.sub_2').show();
		$('.sub_3').show();
	});

	$('#1-btn').click(function(){
		$('#All-btn span').removeClass('now');
		$('.sub_1').show();
		$('.sub_2').hide();
		$('.sub_3').hide();
	});

	$('#2-btn').click(function(){
		$('#All-btn span').removeClass('now');
		$('.sub_1').hide();
		$('.sub_2').show();
		$('.sub_3').hide();
	});

	$('#3-btn').click(function(){
		$('#All-btn span').removeClass('now');
		$('.sub_1').hide();
		$('.sub_2').hide();
		$('.sub_3').show();
	});









}); /* 必須　*/