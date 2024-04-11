/**
 * Calcular la nota
 * Autor: Santiago GM
 * 02/04/2024
*/

//con parametros 
let nota;
let porcentaje;

function calcularNota(pnota,pporcentaje){

    nota = pnota;
    porcentaje = pporcentaje;

    let resultado;
    resultado = nota * porcentaje;

    return `El porcentaje de ${nota} es: ${resultado}`;
    
}

//Como Expresión

const calcularNotaExp = function(pnota,pporcentaje){

    nota = pnota;
    porcentaje = pporcentaje;

    let resultado;
    resultado = nota * porcentaje;

    return `El porcentaje de ${nota} es: ${resultado}`;
    
}