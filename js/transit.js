$(document).ready(function () {	

$('.good__href').on('click', function (event) {
		event.preventDefault();
		var top = $('#form').offset().top;
		$('body,html').animate({scrollTop: top}, 600);
	});


$('.section1__right__bottom-item2').on('click', function (event) {
		event.preventDefault();
		var top = $('#form').offset().top;
		$('body,html').animate({scrollTop: top}, 600);
	});

});