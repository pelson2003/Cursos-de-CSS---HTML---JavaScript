$(function() {

	$(".titulo").click(function(){

		var conteudo = $(this).parent().find(".conteudo");

		// se dentro da div conteudo não tem a classe show
		if(!conteudo.hasClass("show")){

			// Ocultando a classe que estava a mostra
				$(".caixa").find(".show").slideUp("fast",function(){
					$(this).addClass("hide").removeClass("show");
				});

			// Mostrando a chave que foi clicada
				conteudo.slideDown("fast", function(){
					$(this).addClass("show").removeClass("hide");
				}); 
		}
	});
});