//let: permite definir variables limitando su alcance al bloque, declaracion o expresion donde se esta usando
//var: define una varible global o local en una funcion sin importar el ambito del bloque

'use strict'

//PRUEBA CON var
var numero = 40;
console.log(numero); //valor 40

if(true){
    numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50


//PRUEBA CON let
var texto = "Master en JS";
console.log(texto); //valor: Master en JS

if(true){
    let texto = "Curso Laravel";
    console.log(texto); //valor: Curso Laravel
}

console.log(texto); //valor: Master en JS