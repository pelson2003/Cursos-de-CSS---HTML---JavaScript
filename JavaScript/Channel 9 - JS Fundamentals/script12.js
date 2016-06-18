
/*
var batwing = {
	status: "Ready",
	rescueBatman: function() {
		document.write("Locating his transponder... launch");
	}
}

if (batwing.status === "Ready"){
	batwing.rescueBatman();
}

var utilities = {
	printAllMembers: function(targetObject) {
		for(i in targetObject){
			document.write("<br></br>" + targetObject[i]);
		}
	}
}

utilities.printAllMembers(batwing);

var i_am_empty = {};

utilities.printAllMembers(i_am_empty);

*/
// Outro exemplo

var planet = {
	id: 34,
	name: "Imtempesta Nox",
	faction: {
		factionId:2,
		name: "Nex",
		notification: function (){
			document.write("Nex Allieance");
		}
	},
	cities: [
		{ locationId: 15, name: "Gladius"},
		{ locationId: 16, name: "Chalybs"},
		{ locationId: 17, name: "Ensis"},
	]
}

//Formas de acessar os valores acima;
planet.faction.notification();

document.write(planet.cities[1].name);
document.write(planet.cities[1].locationId);

document.write("<br/>" + planet.name);
planet.name = "Vultus";
document.write("<br/>" + planet.name);

// Abaixo informamos que z aponta para a variável acima
var z = planet;
document.write(z.name);

// Adicionando uma informação ou um método a planet
// Veja que adicionamos um processo defense a planet
// e depois chamamos ele.

if(typeof planet.defense == "undefined") {
	planet.defense = "Ion Canon";
}

document.write(planet.defense);

// You can iterate through all the members:

for(member in planet){
	document.write("<br/>" + member + "->" + planet[member]);
}

// Utilizando o NEW Operator

function car(make, mode, year) {
	this.make = make;
	this.model = model;
	
}	