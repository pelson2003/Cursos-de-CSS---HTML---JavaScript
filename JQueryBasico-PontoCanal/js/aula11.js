$(function(){
	var nav = $(".menu");
	$(window).scroll(function(){
		// Meu tipo tem 53 pixels, visto pelo inspecionar elementos do windows
		// Fixo bem feio mas essa é a idéia do processo

		if($(this).scrollTop() > 173){
			nav.addClass("menu-fixo");
		} else {
			nav.removeClass("menu-fixo");
		}
	});
});