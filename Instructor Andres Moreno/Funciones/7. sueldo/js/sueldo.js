/**
 * Calcular el sueldo total de una persona
 * Autor: Santiago GM
 * 02/04/2024
 */

//Como parámetro
function sueldo(pdiaT, pvalorD) {
  let diaT;
  let valorD;
  let pago;

  diaT = pdiaT;
  valorD = pvalorD;
  pago = diaT * valorD;
  return pago;
}

function salud(pago) {
  let saludP = pago * 0.12;
  return saludP;
}

function pension(pago) {
  let pensionP = pago * 0.16;
  return pensionP;
}

function arl(pago) {
  let arlP = pago * 0.052;
  return arlP;
}
function pagoTotal(pago) {

  let saludP = salud(pago);
  let pensionP = pension(pago);
  let arlP = arl(pago);
  let total = pago - (saludP + pensionP + arlP);
  return total;
}

//como Expresión

const sueldoExp =  function(pdiaT, pvalorD) {
  let diaT;
  let valorD;
  let pago;

  diaT = pdiaT;
  valorD = pvalorD;
  pago = diaT * valorD;
  return pago;
}

const saludExp = function(pago) {
  let salud = pago * 0.12;
  return salud;
}

const pensionExp =  function(pago) {
  let pension = pago * 0.16;
  return pension;
}

const arlExp =  function(pago) {
  let arl = pago * 0.052;
  return arl;
}
const pagoTotalExp =  function(pago) {
  let saludE = salud(pago);
  let pensionE = pension(pago);
  let arlE = arl(pago);
  let total = pago - (saludE + pensionE + arlE);
  return total;
}

