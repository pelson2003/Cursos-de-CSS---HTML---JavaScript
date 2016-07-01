$(function(){

	// Valida se existe um erro no carregamento da imagem
	// Caso tenha erro executa a função de imagem de tela de erro
		$("img").error(function(){
			$("img").attr("src","img/erro.jpg");
		});

	// Neste caso enviamos um alerta e mostra a imagem do erro
		$("img").error(function(){
				// O .attr pega o atributo src desta imagem
				var imagem = $(this).attr("src");
				alert("imagem " + imagem + " indisponivel!!");
				$("img").attr("src","img/erro.jpg");
			});

	// Vamos trabalhar com o evento resize para a janela do navegador

		//Você passa um valor width para sua janela
		//Mas você primeiro pega a width de sua janela atual

			// Será executado o resize na abertura ou refresh da página
			$("img")
				.width($(window).width())
				.height($(window).height());

			// Será efetuado o resize durante o processo de ajuste da janela
			// Você captura quando temos um resize e executa a função.
			$(window).resize(function(){
				$("img")
				.width($(window).width())
				.height($(window).height());
			});

			// Executando um evento quando mudamos o scroll

			$(window).scroll(function(){
				$("img").fadeOut(1000);
			});

			// Executando um evento quando mudamos o scrool em 425 

			$("body").css("height", "5000px");
			$(window).scroll(function(){
				// Pega a altura total
				var topo = $(window).scrollTop();
				// Se for maior que 425 a alteração a imagem some
				if(topo > 425){
					$("img").fadeOut(1000);
				} else {
					$("img").fadeIn(1000);	
				}
			});

});