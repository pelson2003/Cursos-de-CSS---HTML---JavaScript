$(function(){

	var ex1 = $(".ex1");
	var ex2 = $(".ex2");
	var ex3 = $(".ex3");
	var ex4 = $(".ex4");
	// Pegando pelo type
	var button = $(":button");

	// Usando click e dblclick para fadein e fadeout
	button.click(function(){
		ex1.fadeOut(1000);
	}).dblclick(function(){
		ex1.fadeIn(1000);
	});

	// Efeito FadeTO, trabalha com a transparencia
	// 0.5 = 30% de transparencia. ou de 70% visibilidade
	// porém neste caso encadeamos os eventos, o ex4 espera o ex2 terminar
	// Chamado de CALLBACK
	
	button.click(function(){
		ex2.fadeTo(3000,0.4, function(){
			ex4.fadeTo("slow",0.2);
		});
	});
	

	// Efeito FadeToggle
	// clica em um ele aparece , e outro desaparece
	button.click(function(){
		ex3.fadeToggle("fast");
	});
});