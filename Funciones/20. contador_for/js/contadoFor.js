/**
 * Contar hasta 5 con for
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let numero;

//Como paramétros 

function contar(pnumero){
    numero = pnumero;
    let contador;
    let limite = 5;
    let resultado = "";

    for(contador = 1; numero >= contador; contador ++){

        resultado += contador+".\n";
    }
    return resultado;
}

// Como Expresión

const contarExp = function (pnumero){
    numero = pnumero;
    let contador;
    let limite = 5;
    let resultado = "";

    for(contador = 1; numero >= contador; contador ++){

        resultado += contador+".\n";
    }
    return resultado;
}