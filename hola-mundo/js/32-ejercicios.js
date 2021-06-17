/* ----------------------------------------------------------------------------------------
Ejercicio 1
Programa que pida dos numeros y que nos diaga cual es el mayor, el menor y si son iguales
PLUS: si los nros no son un nro o son menores o iguales a cero, nos lo vuelva a pedir
*/
// var nro1 = parseInt(prompt("Primer nro: "));
// var nro2 = parseInt(prompt("Segundo nro: "));

// while(isNaN(nro1) || isNaN(nro2) || nro1<=0 || nro2 <=0){ //isNaN: funcion que evalua si es un nro
//     nro1 = parseInt(prompt("Primer nro: "));
//     nro2 = parseInt(prompt("Segundo nro: "));
// }


// if(nro1== nro2){
//     console.log("Ambos numeros son iguales");
// } else if(nro1>nro2){
//     console.log("El nro " + nro1 + " es el mayor");
//     console.log("El nro " + nro2 + " es el menor");
// } else{
//     console.log("El nro " + nro2 +  " es el mayor");
//     console.log("El nro " + nro1 + " es el menor");
// } 


/*------------------------------------------------------------------------------------------
Ejercicio 2
Utilizando un bucle, mostrar la suma y la media de los nros introducidos
hasta introducir un nro negatico y ahi mostrar el resultado
*/

// var suma = 0;
// var media = 0;
// var nro = 0;
// var contador = 0;

// do {
//     nro = parseInt(prompt("Ingrese nro: "));
//     if(nro>=0){
//         contador++;
//         suma = suma + nro;
//         media = suma / contador;
        
//     }
// } while(nro>=0) 

// console.log("SUMA: " + suma); 
// console.log("MEDIA: " + media); 


/*---------------------------------------------------------------------------------------
Ejercicio 3
Hacer un programa que muestre todos los nros entre 2 nros introducidos por el usuario
*/

// var nro1 = parseInt(prompt("Primer nro:"));
// var nro2 = parseInt(prompt("Segundo nro:"));

// while(nro1<=nro2){
//     console.log(nro1);
//     nro1++;
// }


/*---------------------------------------------------------------------------------------
Ejercicio 4
Mostrar todos los nros impares que hay entre 2 nros introducidos por el usuario
*/
// var nro1 = parseInt(prompt("Primer nro:"));
// var nro2 = parseInt(prompt("Segundo nro:"));

// console.log("Los nros impares entre : " + nro1 + " y " + nro2);
// while(nro1<=nro2){
//     if(nro1%2==0){
//         console.log(nro1);
       
//     }
//     nro1++;
// }


/*------------------------------------------------------------------------------------------
Ejercicio 5
Muestre todos los nros divisores de un nro introducido en el prompt
*/
// var nro = parseInt(prompt("Ingrese nro:"));
// var divisor = 1;
// while(divisor <= nro){
//     if(nro%divisor==0){
//         console.log(divisor);
//     }
//     divisor++;
// }


/*------------------------------------------------------------------------------------------
Ejercicio 6
Que nos diga si un nro es par o impar
1. ventana prompt
2. si no es valido que nos pida de nuevo el nro
*/

// var nro = parseInt(prompt("Ingrese nro: "));
// while(isNaN(nro)){
//    nro = parseInt(prompt("Ingrese nro: "));
// } 
// if (nro%2==0){
//     console.log("El nro "+ nro + " es par");
// } else {
//     console.log("El nro "+ nro + " es impar");
// }


/*------------------------------------------------------------------------------------------
Ejercicio 7
Tabla de multiplicar de un nro introducido por pantalla
*/
// var nro = parseInt(prompt("Ingrese nro: "));
// if(!isNaN(nro)){
//     console.log("La Tabla del " + nro);
//     for(var i=1; i<=12; i++){
//         console.log( i + " x " + nro + " = " + (i*nro));
//     }
// } else {
//     console.log("Nro incorrecto");
// }


/*------------------------------------------------------------------------------------------
Ejercicio 8
Calculadora:
- Pida 2 nros por pantalla
- Si ingresamos uno mal que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de:
    --> sumar
    --> restar
    --> multiplicar
    --> dividir
    las dos cifras
*/

var nro1 = parseInt(prompt("Primer nro:"));
while(isNaN(nro1)){
    nro1 = parseInt(prompt("Ingresar de nuevo el primer nro:"));
}

var nro2 = parseInt(prompt("Segundo nro:"));
while(isNaN(nro2)){
    nro2 = parseInt(prompt("Ingresar de nuevo el segundo nro:"));
}

document.write("<h1> CALCULADORA </h1>");
document.write("SUMA = " + (nro1 + nro2) + "</br>");
document.write("RESTA = " + (nro1 - nro2) + "</br>");
document.write("MULTIPLICACIÓN = " + (nro1 * nro2) + "</br>");
document.write("DIVISIÓN = " + parseFloat(nro1 / nro2) + "</br>");
