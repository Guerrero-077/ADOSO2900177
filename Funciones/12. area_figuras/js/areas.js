/**
 * Area de tres figutas
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let lado;

//Como paramétro
function areas(plado) {
  lado = plado;

  let area;
  area = lado * lado;
  return area;
}
let areaUno;
let areaDos;
let areaTres;

function validar(pareaUno, pareaDos, pareaTres) {
  areaUno = pareaUno;
  areaDos = pareaDos;
  areaTres = pareaTres;

  if (areaUno > areaDos && areaUno > areaTres) {

    return `El area del primer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;

  } else if (areaDos > areaUno && areaDos > areaTres) {

    return `El area del segundo cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;

  } else {
    
    return `El area del tercer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;
  }
}

const areas = function(plado) {
  lado = plado;

  let area;
  area = lado * lado;
  return area;
}

const validarExp = function(pareaUno, pareaDos, pareaTres) {
  areaUno = pareaUno;
  areaDos = pareaDos;
  areaTres = pareaTres;

  if (areaUno > areaDos && areaUno > areaTres) {

    return `El area del primer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;

  } else if (areaDos > areaUno && areaDos > areaTres) {

    return `El area del segundo cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;

  } else {
    
    return `El area del tercer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`;
  }
}