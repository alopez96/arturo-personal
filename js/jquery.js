// every jquery must be inside $(function(){})
// this waits for the elements on the DOM to load before you start to reference them
$(function(){

	$('.btn').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Smooth scroll.
	$('.smooth-scroll').scrolly();
	$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	$(".btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#myDiv").offset().top
		}, 2000);
	});
})