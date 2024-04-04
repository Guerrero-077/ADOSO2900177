/**
 * Factorial de 5 con for
 * Autor: Santiago GM 
 * Fecha: 03/04/2024
*/

let numero;
 
//Como paramétro

function factor(pnumero){

    numero = pnumero;
    let factorial = 1;
    let contador;
    
    for(contador = 1;  numero >= contador; contador++){

        factorial = factorial * contador;
    }
    
    return factorial;
}

//Como  Expresión

const factorExp = function (pnumero){

    numero = pnumero;
    let factorial = 1;
    let contador;
    
    for(contador = 1;  numero >= contador; contador++){

        factorial = factorial * contador;
    }
    
    return factorial;
}