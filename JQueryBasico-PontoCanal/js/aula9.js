$(function(){

	var ex = $(".ex1");

	// Usando Hide para esconder o ev1.
		$(".ev1").click(function(){
			ex.hide(2000);
		});

	// Usando o Show para fazer aparecer novamente

		$(".ev2").click(function(){
			ex.show(2000);
		});

	// Esse alterna, primeiro show, depois wide

		$(".ev3").click(function(){
			ex.toggle(2000);
		});

	// Utilizando KEYUP para efetuar este processo

		$(".ev4").keyup(function(){
			var texto = $(this).val();
			if(texto == "hide"){
				ex.hide(2000);
			}if(texto == "show"){
				ex.show(2000);
			}if(texto == "toggle"){
				ex.toggle(2000);
			}
		});
});