'use strict'
//FUNCIONES ANONIMAS
function sumar(nro1, nro2){
    var suma = nro1 + nro2;

    return suma;
}
console.log(sumar(4,5));

//CALLBACKS
function sumame(nro1, nro2, sumaYmuestra, sumaPorDos){
    var suma = nro1 + nro2;

    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));
});