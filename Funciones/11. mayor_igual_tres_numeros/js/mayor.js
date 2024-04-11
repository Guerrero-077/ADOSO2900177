/**
 * Mayor igual de 3 números
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let num;
let numUno;
let numDos;
let numTres;

//Como paramétro

function mayorIgual(pnum){
    num = pnum;
    return num;

}

function validar(pnumUno,pnumDos,pnumTres){

    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;

    if(numUno == numDos && numUno == numTres &&  numDos == numTres) {
        return "Los tres numeros son iguales";
    }else if (numUno > numDos && numUno > numTres) {
        return `El número uno es mayor que número dos y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    } else if(numDos > numUno && numDos > numTres){
        return `El número dos es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }else{

        return `El número tres es mayor que número uno y que número dos: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }
}

//Como Expresión

const mayorIgualExp = function (pnum){
    num = pnum;
    return num;
}
const validarExp =   function(pnumUno,pnumDos,pnumTres){
    numUno = pnumUno;
    numDos = pnumDos;
    numTres = pnumTres;


    if(numUno == numDos && numUno == numTres &&  numDos == numTres) {
        return "Los tres numeros son iguales";
    }else if (numUno > numDos && numUno > numTres) {
        return `El número uno es mayor que número dos y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    } else if(numDos > numUno && numDos > numTres){
        return `El número dos es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }else{

        return `El número tres es mayor que número uno y que número tres: El número uno es ${numUno}, El número dos es ${numDos}, El número tres es ${numTres}`;
    }
}