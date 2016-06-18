var check = "nelson";
var score = 0;
if( check === "cake" || check === "cupcake" ) {
	score = 1;
	console.log("correct answer your score is " + score);
} else if (check === "dream" && check === "baddream") {
	score = 5
	console.log ("super correct your score is " + score);
} else if ((check === "botao" || check === "nelson") && check == "nelson") {
	score = 10;
	console.log ("your score is " +  score);
} else {
	score = 0;
	console.log ("your score is " +  score);
}

function login ( access ) {
	if ( access === "head office"){
		return "head office backedn";
	}
}

function login2 ( access2 ) {
	if ( access2 === "altran"){
		var ifscope="vai funcionar";
	}
	return access2;
}
