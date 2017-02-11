$(document).foundation()

function goTo(x) {
	document.querySelector(x).scrollIntoView({ 
	  behavior: 'smooth' 
	});
}

var isMobile = false;

function resizer() {
    var w = $(window).width();
    if (w < 768) {
        console.log("resize");
        isMobile = true;
		
    } else { 
        isMobile = false;
    }
}

$(window).on('load resize', function(){ 
    resizer();
});