/**
 * Sacar el porcentaje de tres notas}
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

//Como paramétro
function notas(pnota, pporcentaje) {
  let nota;
  let porcentaje;
  let operacion;
  nota = pnota;
  porcentaje = pporcentaje;
  operacion = nota * porcentaje;
  return operacion;
}

function validar(psuma) {
  let suma;
  suma = psuma;
  if (suma > 4.5) {
    return "La calificación es Superior " + suma;
  } else if (suma <= 4.5 && suma > 3.5) {
    return "La calificaciom es Buena " + suma;
  } else if (suma >= 3 && suma <= 3.5) {
    return "La calificacion es Media " + suma;
  } else {
    return "la calificacion es Mala" + suma;
  }
}

//Como Expresión
const notasExp = function (pnota, pporcentaje) {
  let nota;
  let porcentaje;
  let operacion;
  nota = pnota;
  porcentaje = pporcentaje;
  operacion = nota * porcentaje;
  return operacion;
}

const validarExp = function (psuma) {
  let suma;
  suma = psuma;
  if (suma > 4.5) {
    return "La calificación es Superior " + suma;
  } else if (suma <= 4.5 && suma > 3.5) {
    return "La calificaciom es Buena " + suma;
  } else if (suma >= 3 && suma <= 3.5) {
    return "La calificacion es Media " + suma;
  } else {
    return "la calificacion es Mala" + suma;
  }
};
