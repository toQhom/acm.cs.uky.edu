$(document).ready(function(){
	resizeContainer();
});

$(window).resize(function() {
	resizeContainer();
});

$('#main').backstretch("./background2.jpg",{});
var scrollBottom = $(window).scrollTop() + $(window).height();

$("#mainMenu li:nth-child(3)").click(function(e) {
	e.preventDefault();
	$('html, body').animate({
        scrollTop: $('#contact').offset().top - 50
	}, 1000);
});

$("#mainMenu li:last-child").click(function(e) {
	e.preventDefault();
	$('html, body').animate({
        scrollTop: $('#team').offset().top - 35
	}, 1000);
});

var secondPageVisible = false;
var firstTime = true;

function sweepUp() {
	if (!firstTime){
		$('#headerCycle').removeClass('cycleAnimationDown');
	}
	$('#container').css('height', '650px');
	$('#headerCycle').addClass('cycleAnimation');
	$('#firstDiv').addClass('pt-page-moveToTop');
	secondPageVisible = !secondPageVisible;
}

function sweepDown() {
	$('#container').css('height', '380px');
	$('#headerCycle').removeClass('cycleAnimation');
	$('#headerCycle').addClass('cycleAnimationDown');
	$('#firstDiv').addClass('pt-page-moveToBottom');
	$('#firstDiv').removeClass('pt-page-moveToTop');
	firstTime = false;
	secondPageVisible = !secondPageVisible;
}

function resizeContainer() {
	if (window.innerWidth < 750) {
		if (window.innerHeight >= 1309) {
			$('#mainWrapper').css('height', 1350);
		}
		else if (255 + $("#container").height() > window.innerHeight) {
			$('#mobilepage').css('height', $("#container").height()-window.innerHeight+470);
			if (secondPageVisible) {
				sweepDown();
			}
		}
		else {
			$('#mainWrapper').css('height', 1350);
		}
	}
	else if (window.innerWidth >= 750) {
		$('#mainWrapper').css('height', 850);
		$('#overlay').css('height', 0); /*This line for some reason allows the particles to be interactable*/
	}
}