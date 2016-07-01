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
	

	var ex = $(".ex1");

	// Utilizando o focus para efetuar um evento.
		
		$(".ev1").focus(function(){
			ex.text($(this).attr("title"));
		}).keyup(function(){
			if($(this).val()=="pontocom"){
				$(".ev2").focus();
			}
		});

		// Utilizando o BLUE que é o FOCUSOUT para formulários
			$(".ev1").blur(function(){
				ex.text("Saida do Campo: " + $(this).attr("name"));
			});

		// Evento change, que é disparado se você entrou em um campo e mexeu em algo
		// Caso entre no campo e não seja editado não fazemos nada
		// Parte de validação de campos.

			$(".ev1").change(function(){
				ex.text("Campo Alterado: " + $(this).attr("name") +$(this).val());
			});

		// Evento na função do click do botao

			$(".selecionar").click(function(){
				$(".ev4").select();
				// Bloqueando o submit do formulário
					$("form").submit(function(){
						return false;
					});
			});
});