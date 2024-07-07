/**
 * Area de tres figutas
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

//Como parámetro
function areas(plado) {
  let lado;
  let area;

  lado = plado;
  area = lado * lado;
  return area;
}

function validar(pareaUno, pareaDos, pareaTres) {
  let areaUno;
  let areaDos;
  let areaTres;
  areaUno = pareaUno;

  areaDos = pareaDos;
  areaTres = pareaTres;

  if (areaUno == areaDos && areaUno == areaTres && areaDos == areaTres) {
    return "Las áreas son iguales";
  } else if (areaUno > areaDos && areaUno > areaTres) {
    return "El área del primer cuadrado es mayor. " + areaUno;
  } else if (areaDos > areaUno && areaDos > areaTres) {
    return "El área del segundo cuadrado es mayor." + areaDos;
  } else {
    return "El área del tercer cuadrado es mayor." + areaTres;
  }
}

//Como Expresiónb
const areasExp = function (plado) {
  let lado;
  let area;

  lado = plado;
  area = lado * lado;
  return area;
}

const validarExp = function (pareaUno, pareaDos, pareaTres) {
  let areaUno;
  let areaDos;
  let areaTres;

  areaUno = pareaUno;
  areaDos = pareaDos;
  areaTres = pareaTres;
  if (areaUno == areaDos && areaUno == areaTres && areaDos == areaTres) {
    return "Las áreas son iguales";
  } else if (areaUno > areaDos && areaUno > areaTres) {
    return "El área del primer cuadrado es mayor. " + areaUno;
  } else if (areaDos > areaUno && areaDos > areaTres) {
    return "El área del segundo cuadrado es mayor." + areaDos;
  } else {
    return "El área del tercer cuadrado es mayor." + areaTres;
  }
}
