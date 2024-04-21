/**
 * Mayor igual de dos números
 * Autor: Santiago GM
 * 03/04/2024
 */

//Como paramétro

function validar(pnumUno, pnumDos) {
  let numUno;
  let numDos;

  numUno = pnumUno;
  numDos = pnumDos;

  if (numUno == numDos) {
    return "Los número son iguales";
  } else if (numUno > numDos) {
    return "El número uno es el mayor " + numUno;
  } else {
    return "El número dos es el mayor " + numUno;
  }
}
//Como Expresión


const validarExp = function (pnumUno, pnumDos) {
  let numUno;
  let numDos;

  numUno = pnumUno;
  numDos = pnumDos;

  if (numUno == numDos) {
    return "Los número son iguales";
  } else if (numUno > numDos) {
    return "El número uno es el mayor " + numUno;
  } else {
    return "El número dos es el mayor " + numUno;
  }
}
