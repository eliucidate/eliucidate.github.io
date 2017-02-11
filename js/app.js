$(document).foundation()

function goTo(x) {
	document.querySelector(x).scrollIntoView({ 
	  behavior: 'smooth' 
	});
}
