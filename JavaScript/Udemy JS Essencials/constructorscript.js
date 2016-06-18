
function ConstructApple(color, width, height){
	
	var teste = 100 + 150; 
	var obj = {PROP: "property"};
	console.log(teste, obj, "string", teste+50);

	console.log(this);
	
	this.color = color; /* this = windows */
	this.width = width;
	this.height = height;

	console.log(this);
}
ConstructApple.prototype = {
	eat: function() { return "eat that aplle"; },
	thrown: function() { return "thrown it";},
	nibble: function() { return "nibble like a hamster";}
}
var apple = new ConstructApple("red", 200, 300); /* Create a new object , a new windows */
var apple2 = new ConstructApple("blue", 300, 400); /* Link to Prototype */
var apple3 = new ConstructApple("green", 32, 3232); /* new object {} */