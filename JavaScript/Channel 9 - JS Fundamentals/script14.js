
// My JQuery First Function
	$(function(){
	
		// Alterando o texto do Title
			$("#title").text("Yay, i can now get at the H1 Immmediately");

		// Alterando o texto do paragrafo 1
			$("#first").html("<h2>Great</h2>");

		// Append & Prepend works INSIDE current given sellector
			$("#first").prepend("<h2>Great ANTES Quotes</h2>");
			$("#first").append("<h2>Great DEPOIS Quotes</h2>");

		// Before, After, InsertBefore, insertAfter works OUTSIDE current given sellector

		// Chaning Anchor
			$("#myAnchor").attr("href", "http://changing.com");

		// Aplicando um CSS no Title através de JQuery

			$("#title").addClass("standout");

	});

	



// JQUERY Special Selectors
// Return a Collection of object bellow
/*
	$(".importantText")  // Classes
	$("#myFirstParagraph") // Ids
	$("p") // Element P

	$(document).ready() // Full DOM , quando tiver READY

	$("p").fadeOut() // Element P por favor chamem fadeOut now

// JQuery - Incluindo alguns items no HTML

jQuery('<div id = "badge"><img src="badge.gif" alt="Badget Earned"</div>');

$.myCustonMethod = function() {alert('hi');};



$.listBox = {
	show: function() {},
	hide: function() {},
	position: function() {},
	initiate: function() {},
};

*/
