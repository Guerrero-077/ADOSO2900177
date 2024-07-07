/**
 * Factorial de 5
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let numero;

//como paramétro

function factor(pnumero){
    numero = pnumero;
    let factorial;
    let contador;

    contador = 0;
    factorial = 1;

    while(contador < numero){
        contador = contador+1;
        factorial =factorial*contador;
    } 
    return factorial;
}

//Como Expresión

const factorExp = function (pnumero){
    numero = pnumero;
    let factorial;
    let contador;

    contador = 0;
    factorial = 1;

    while(contador < numero){
        contador = contador+1;
        factorial =factorial*contador;
    } 
    return factorial;
}
