/**
 * Calcular el sueldo total de una persona
 * Autor: Santiago GM
 * 02/04/2024
 */

let diaT;
let valorD;
let porcentaje;
let operacion;
let pago;
//Como paramétro
function suledo(pdiaT, pvalorD) {
  diaT = pdiaT;
  valorD = pvalorD;
  pago = diaT * valorD;
  return pago;
}

function saludp(ppsalud) {
  porcentaje = ppsalud;
  operacion = pago * porcentaje;
  return operacion;
}
function pensionp(ppesion) {
  porcentaje = ppesion;
  operacion = pago * ppesion;
  return operacion;
}
function arlp(pparl) {
  porcentaje = pparl;
  operacion = pago * porcentaje;
  return operacion;
}

function descuentos(psalud, ppesnsion, parl) {
  let pensionD;
  let arlD;
  let saludD;
  saludD = psalud;
  pensionD = ppesnsion;
  arlD = parl;

  operacion = saludD + pensionD + arlD;
  return operacion;
}

//Como Expresión
const suledoExp = function(pdiaT, pvalorD) {
  diaT = pdiaT;
  valorD = pvalorD;
  pago = diaT * valorD;
  return pago;
}

const saludpExp = function(ppsalud) {
  porcentaje = ppsalud;
  operacion = pago * porcentaje;
  return operacion;
}
const pensionpExp = function(ppesion) {
  porcentaje = ppesion;
  operacion = pago * ppesion;
  return operacion;
}
function arlp(pparl) {
  porcentaje = pparl;
  operacion = pago * porcentaje;
  return operacion;
}

const descuentosExp = function(psalud, ppesnsion, parl) {
  let pensionD;
  let arlD;
  let saludD;
  saludD = psalud;
  pensionD = ppesnsion;
  arlD = parl;

  operacion = saludD + pensionD + arlD;
  return operacion;
}
