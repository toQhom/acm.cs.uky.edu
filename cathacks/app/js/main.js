$(function() {
    $(window).scroll(function(e){
        if ($(this).scrollTop() > 1) {
            $('#navbar').css("display", "block");
        } else {
            $('#navbar').css("display", "block"); // Always display navbar for now.
        }
    });
		
	
    $("#Homeli").click(function(e) {
			e.preventDefault();
			$('html, body').animate({
            scrollTop: $('#Home').offset().top - 50
            }, 600);		
		});
    $("#Aboutli").click(function(e) {
			e.preventDefault();
			$('html, body').animate({
            scrollTop: $('#About').offset().top - 50
            }, 600);		
		});
    $("#Applyli").click(function(e) {
			e.preventDefault();
			$('html, body').animate({
            scrollTop: $('#Apply').offset().top - 50
            }, 600);		
		});
    $("#Sponsorli").click(function(e) {
			e.preventDefault();
			$('html, body').animate({
            scrollTop: $('#Sponsor').offset().top - 50
            }, 600);		
		});	
	
});

$(".main-btnBannerBtn").click(function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#Apply').offset().top - 50
    },600);
});