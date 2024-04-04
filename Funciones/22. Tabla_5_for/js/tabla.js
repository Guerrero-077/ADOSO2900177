/**
 * tabla del 5 con For
 * Autor: Santiago GM
 * Fecha 03/04/2024
 */

let tabla;
//Como paramétro

function tablas(ptablas){
    tabla = ptablas
    let contador;
    let limite = 5;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado}\n`;
    }
    return msg;
}

//Como Expresión
const tablasExp = function (ptablas){
    tabla = ptablas
    let contador;
    let limite = 5;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado}\n`;
    }
    return msg;
}