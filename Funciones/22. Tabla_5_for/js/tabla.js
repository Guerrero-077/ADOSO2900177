/**
 * tabla del 5 con For
 * Autor: Santiago GM
 * Fecha 03/04/2024
 */

let tabla;
let limite;
//Como paramétro

function tablas(ptablas,plimite){
    tabla = ptablas;
    limite = plimite;
    let contador;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado}\n`;
    }
    return msg;
}

//Como Expresión
const tablasExp = function (ptablas,plimite){
    tabla = ptablas;
    limite = plimite;
    let contador;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado}\n`;
    }
    return msg;
}