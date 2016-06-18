
var arraylength = ["hello", "world", 200];
var arraysub = [];
var array = [];
for( var index3 = 0; index3 < arraylength.length; index3++) {
	console.log ( arraylength[index3] );
}
for ( var index = 0; index < 100; index++) {
	array.push(index); 
};
for ( var index2 = 100; index2 > 0; index2--) {
	arraysub.push(index2); 
}; 
/* Trabalhando com For com Arrays - Importante */
var obj = {color: "red", width:200, height:300};
var arrayobj = Object.keys( obj ); /* le as chaves de um objeto */ 
for( var index4 = 0; index4 < arrayobj.length; index4++) {
	console.log ( arrayobj[index4] ); /* Pega as Chaves */
	console.log ( obj [ arrayobj[index4] ] ); /* Pega os Valores */
}