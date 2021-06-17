'use strict'
/*
1. Pida 6 nros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
(se valorara el uso de funciones)
 */

var arrayNro = new Array(6);

//1. Pedir 6 nros 
for(let i=0; i<6; i++){
     var nro = parseInt(prompt("Ingrese nro: "));
    arrayNro[i] = nro; 
}

// 2. Mostrar el array por la pagina y consola
for(let i in arrayNro){
    document.write("Nro : " + arrayNro[i] + "</br>");
    // console.log(`${i}: ${arrayNro[i]}`);
    console.log(i + ": " + arrayNro[i]);
}

// 3. Ordenar y mostrar array
// 4. Invertir orden y mostrar array
// 5. Mostrar tamaño del array
// 6. 
