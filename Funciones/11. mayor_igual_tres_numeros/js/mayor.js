/**
 * Mayor igual de 3 números
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

//Como paramétro

function validar(pnumUno, pnumDos, pnumTres) {
  let numUno;
  let numDos;
  let numTres;

  numUno = pnumUno;
  numDos = pnumDos;
  numTres = pnumTres;

  if (numUno == numDos && numUno == numTres && numDos == numTres) {
    return "Los tres numeros son iguales";
  } else if (numUno > numDos && numUno > numTres) {
    return "El número uno es el mayor " + numUno;
  } else if (numDos > numUno && numDos > numTres) {
    return "El número dos es el mayor " + numTres;
  } else {
    return "El número tres es el mayor " + numTres;
  }
}

//Como Expresión


const validarExp = function (pnumUno, pnumDos, pnumTres) {
  let numUno;
  let numDos;
  let numTres;

  numUno = pnumUno;
  numDos = pnumDos;
  numTres = pnumTres;

  if (numUno == numDos && numUno == numTres && numDos == numTres) {
    return "Los tres numeros son iguales";
  } else if (numUno > numDos && numUno > numTres) {
    return "El número uno es el mayor " + numUno;
  } else if (numDos > numUno && numDos > numTres) {
    return "El número dos es el mayor " + numTres;
  } else {
    return "El número tres es el mayor " + numTres;
  }
}
