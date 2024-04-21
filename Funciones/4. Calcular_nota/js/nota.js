/**
 * Calcular la nota
 * Autor: Santiago GM
 * 02/04/2024
*/

//con parametros 
function calcularNota(pnotaUno,pnotaDos,pnotaTres){
    let notaUno = pnotaUno;
    let notaDos = pnotaDos;
    let notaTres = pnotaTres;
    let promedio; 
    promedio = (notaUno + notaDos + notaTres) / 3;

    return promedio;

}

//Como Expresión
const calcularNotaExp = function(pnotaUno,pnotaDos,pnotaTres){

    let notaUno = pnotaUno;
    let notaDos = pnotaDos;
    let notaTres = pnotaTres;
    let promedio; 
    promedio = (notaUno + notaDos + notaTres) / 3;
    return promedio;
    
}