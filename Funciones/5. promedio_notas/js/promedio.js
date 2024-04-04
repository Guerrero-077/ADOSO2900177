/**
 * Promedio de tres notas
 * Autor: Santiago GM
 * 02/04/2024
*/
let numUno;
let numDos;
let numTres;

//como paramétro
function promedios(pnumUno,pnumDos,pnumTres){

    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;

    let promedio;
    promedio = (numUno + numDos + numTres)/3;
    return  promedio; 
}
//Como Expresión
const promediosExp= function (pnumUno,pnumDos,pnumTres){

    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;

    let promedio;
    promedio = (numUno + numDos + numTres)/3;
    return  promedio; 
}