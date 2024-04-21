/**
 * Mayor de dos números
 * Autor: Santiago GM
 * 03/04/2024
 */

//como paramétro

function validar(pnumUno, pnumDos) {
  let numUno;
  let numDos;

  numUno = pnumUno;
  numDos = pnumDos;

  if (numUno > numDos) {
    return "El número uno es mayor " + numUno;
  } else {
    return "El número dos es mayor " + numDos;
  }
}

//como Expresión

const validarExp = function (pnumUno, pnumDos) {
  let numUno;
  let numDos;

  numUno = pnumUno;
  numDos = pnumDos;

  if (numUno > numDos) {
    return "El número uno es mayor " + numUno;
  } else {
    return "El número dos es mayor " + numDos;
  }
}
