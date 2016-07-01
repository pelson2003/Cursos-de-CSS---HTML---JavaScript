$(function(){

	// Configurando um placeholder via js
	$(".placeholder").each(function(){
		//Pega o Title e coloca dentro de uma váriavel
			var placeholder = $(this).attr("title");
		//Coloca o input dentro de uma váriavle input
			var input = $(this); 
		//Muda o input, sendo que existe uma função que é disparada
		//Quando temos o focusIn neste item
			input
				.val(placeholder)
				.css("color","#ccc")
				//Adiciona um evento se clicar
				.focusin(function(){
					input.css("color","#000");
					if(input.val() == placeholder){
						input.val("");
					}	
				}).focusout(function(){
					if(input.val() === ""){
						input.css("color","#ccc");
						input.val(placeholder);
					}	
				});
	});


	// Trabalhando com KeyPress e mudando o titulo.
	// Somente aceita algumas teclas, não trabalha com shift
	// Começa a trabalhar da segunda tecla digitada

	var ex = $(".ex1");
	$(".key").keypress(function(){
		// Ele pega o atual (this), e pega o valor atual com o .val
		ex.text($(this).val());
	});

	// Trabalhando com KeyDown, usa todas as teclas
	// Começa a trabalhar da segunda tecla digitada
	var ex2 = $(".ex1");
	$(".key").keydown(function(){
		// Ele pega o atual (this), e pega o valor atual com o .val
		ex2.text($(this).val());
	});

	// Trabalhando com KeyUp, dispara na primeira tecla
	var ex3 = $(".ex1");
	$(".key").keydown(function(){
		// Ele pega o atual (this), e pega o valor atual com o .val
		ex3.text($(this).val());
	});

});