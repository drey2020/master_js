'use strict'
//Parametros REST
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
console.log("Fruta1: " + fruta1);
console.log("Fruta2: " + fruta2);
console.log(resto_de_frutas);
}

listadoFrutas("pera","manzana","mandarina","sandia","durazno");

//Parametros SPREAD
var frutas = ["naranja","kiwi"];
listadoFrutas(...frutas,"naranja","uva");

