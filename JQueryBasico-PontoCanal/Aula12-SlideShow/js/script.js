$(function(){

	// Pegando a primeira imagem do slide
	$("#slide img:eq(0)").addClass("ativo").show();

	// Encapsulando a classe
	var texto = $(".ativo").attr("alt");

	// Adicionando um paragrafo
	$("#slide").prepend("<p>" + texto + "</p>");

	// Temporizador para transição de imagens
	// Slide será o nome da função que irá mudar as img
	setInterval(slide, 1500);

	function slide(){
		// Se existe algum tamanho depois
		if($(".ativo").next().size()){
	
			$(".ativo").fadeOut().removeClass("ativo")
						.next()
						.fadeIn().addClass("ativo");

		} else {

			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide img:eq(0)").fadeIn().addClass("ativo");

		}

		var texto = $(".ativo").attr("alt");
		$("#slide p").hide().html(texto).delay(500).fadeIn();

	}   
});