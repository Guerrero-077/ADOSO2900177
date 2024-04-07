/**
 * Sacar el porcentaje de tres notas}
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let nota;
let porcentaje;
let operacion;
//Como paramétro
function notas(pnota, pporcentaje) {
  nota = pnota;
  porcentaje = pporcentaje;
  operacion = nota * porcentaje;
  return operacion;
}

function validar(suma) {
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
const notasExp = function(pnota, pporcentaje) {
  nota = pnota;
  porcentaje = pporcentaje;
  operacion = nota * porcentaje;
  return operacion;
}

const validarExp = function(suma) {
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
