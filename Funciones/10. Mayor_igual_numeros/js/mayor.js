/**
 * Mayor igual de dos números 
 * Autor: Santiago GM
 * 03/04/2024
 */

let numUnos;
let numDos;
function mayorIgual(pnumUno,pnumDos){

    numUnos = pnumUno;
    numDos = pnumDos;

    if(numUnos == numDos){
        return "Los número son iguales";
    }else if(numUnos > numDos){
        return `El número uno es mayor que el dos. El uno es ${numUnos} y el dos es ${numDos}`;
    }else{
        return `El número dos es mayor que el uno. El uno es ${numDos} y el dos es ${numDos}`
    }
    }
    