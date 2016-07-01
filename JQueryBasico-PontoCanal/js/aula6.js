$(function(){

	// Trabalhando com eventos de clique;

	// Váriavel para utilizar o .ex1
	var ex = $(".ex1");

	// Alteração com 1 clique de mouse - click
		$(".ev1").click(function(){
			// Altero a cor;
				$(this).css("background", "#ccc");
			// Altera o texto do EX
				ex.text("Você clicou");
		});

	// Alteração com 2 clique de mouse - dblclick
		$(".ev2").dblclick(function(){
			// Altero a cor;
				$(this).css("background", "#ccc");
			// Altera o texto do EX
				ex.text("Você deu 2 cliques");
		});

	// Evento de Focu, quando voce dar focus - focusin - focusout
		$(".ev3").focusin(function(){
			// Altero a cor;
				$(this).css("background", "#ccc");
			// Altera o texto do EX
				ex.text("Você deu focus no input");
		// Quando você tira o focus
		}).focusout(function(){
			// Altero a cor;
				$(this).css("background", "white");
			// Altera o texto do EX
				ex.text("Você tirou o focus no input");
		});

	// Passando o mouse por cima, hover - hover
		$(".ev4").hover(function(){
			// Altero a cor;
				$(this).css("background", "#ccc");
			// Altera o texto do EX
				ex.text("Você passou o mouse");
		});

	// Quando você aperta o mouse - mousedown, mouseup
		$(".ev5").mousedown(function(){
			// Altero a cor;
				$(this).css("background", "gray");
			// Altera o texto do EX
				ex.text("Você apertou");
		// Quando você solta o mouse
		}).mouseup(function(){
			// Altero a cor;
				$(this).css("background", "white");
			// Altera o texto do EX
				ex.text("Você soltou");
		});

	// Trabalhando com movimento de mouse - mouseenter
	// Somente no elemento, os filhos não sofrem essa herança
	// Cuidado se tivermos um elemento span dentro do elemento

		var a = 0;

		$(".ev6").mouseenter(function(){
			a +=1;
			ex.text("Entradas do Mouse: " + a);
		}).mouseout(function(){
			ex.text("Saida do Mouse");
		});

	// Com o MouseOver não temos o problema da questão do 
	// Span que temos no mouseenter. Filhos HERDA
	// No mouse over temos a questão da Herança ativada

		var b = 0;

		$(".ev7").mouseover(function(){
			b +=1;
			ex.text("MouseOver: " + b);
		}).mouseleave(function(){
			ex.text("Mouse Saiu");
		});

	// Movimentação do Mouse dentro de um elemento
	// Pegando o posicionamento X e Y da página.

		$(".ev8").mousemove(function(move){
			var localx = move.pageX;
			var localy = move.pageY;
			ex.text("Movimento X: " + localx + " Movimento Y: " + localy );
		});

});