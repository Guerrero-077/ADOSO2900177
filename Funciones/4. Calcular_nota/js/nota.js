/**
 * Calcular la nota
 * Autor: Santiago GM
 * 02/04/2024
*/

//con parametros 
let numUno;
let numDos;
let numTres; 

function calcularNota(pnumUno,pnumDos,pnumTres){

    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;

    let nota1;
    let nota2;
    let nota3;

    nota1 =  (numUno*30)/100;
    nota2 =  (numDos*30)/100;
    nota3 =  (numTres*40)/100;

    return  "El promedio de la primera nota es: "+nota1+".\n" +
            "El promedio de la segunda nota es: "+nota2+".\n"+
            "El promedio de la tercera nota es: "+nota3+".\n"

    
}

//Con Expresión

const calcularNotaExp = function (pnumUno,pnumDos,pnumTres){

    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;

    let nota1;
    let nota2;
    let nota3;

    nota1 =  (numUno*30)/100;
    nota2 =  (numDos*30)/100;
    nota3 =  (numTres*40)/100;

    return  "El promedio con Expresión de la primera nota es: "+nota1+".\n" +
            "El promedio con Expresión de la segunda nota es: "+nota2+".\n"+
            "El promedio con Expresión de la tercera nota es: "+nota3+".\n"

    
}