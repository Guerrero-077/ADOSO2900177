/**
 * Tabla de 5 con While
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let tablas;
let limite;

//Como Parametro

function tabla(ptablas,plimite){

    tablas = ptablas;
    limite = plimite;

    let contador = 0;
    let resultado;
    let msg = "";

    while (contador < limite) {

        contador = contador +1;
        resultado = tablas * contador; 

        msg += `${tablas} x ${contador} = ${resultado}\n` 
    }

    return msg;
}
//Como Expresión

const tablaExp = function (ptablas,plimite){

    tablas = ptablas;
    limite  = plimite

    let contador = 0;
    let resultado;
    let msg = "";

    while (contador < limite) {

        contador = contador +1;
        resultado = tablas * contador; 

        msg += `${tablas} x ${contador} = ${resultado}\n` 
    }

    return msg;
}