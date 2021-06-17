'use strict'

function sumame(nro1, nro2, sumaYmuestra, sumaPorDos){
    var suma = nro1 + nro2;

    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(15,27, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ",(dato*2));
});