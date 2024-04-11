/**
 * Mayor igual de dos números
 * Autor: Santiago GM
 * 03/04/2024
 */

let numUno;
let numDos;
let num;
//Como paramétro

function mayorIgual(pnum) {
  num = pnum;
  return num;
}
function validar(pnumUno, pnumDos) {
  numUno = pnumUno;
  numDos = pnumDos;

  if (numUno == numDos) {
    return "Los número son iguales";
  } else if (numUno > numDos) {
    return `El número uno es mayor que el dos. El uno es ${numUno} y el dos es ${numDos}`;
  } else {
    return `El número dos es mayor que el uno. El uno es ${numDos} y el dos es ${numUno}`;
  }
}
//Como Expresión
const mayorIgualExp = function (pnum) {
  num = pnum;
  return num;
}
const validarExp = function (pnumUno, pnumDos) {
  if (numUno == numDos) {
    return "Los número son iguales";
  } else if (numUno > numDos) {
    return `El número uno es mayor que el dos. El uno es ${numUno} y el dos es ${numDos}`;
  } else {
    return `El número dos es mayor que el uno. El uno es ${numDos} y el dos es ${numUno}`;
  }
}
