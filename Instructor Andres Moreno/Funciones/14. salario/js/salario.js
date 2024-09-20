/**
 * Calcular el sueldo de una persona
 *Autor: Santiago GM
 *Fecha: 03/04/2024
 */

//Como paramétro

function sueldo(pdiaT, pvalorD) {
  let diaT; //Dias Trabajados
  let valorD; //Valor por día
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
function subTras(pago) {
  let salarioM = 1300000;
  let trans;
  if (pago <= salarioM * 2) {
    trans = 114000;
  } else {
    trans = 0;
  }
  return trans;
}
function reten(pago) {
  let salarioM = 1300000;
  let retencion;
  if (pago > salarioM * 4) {
    retencion = pago * 0.04;
  } else {
    retencion = 0;
  }
  return retencion;
}
function pagoT(pago) {
  let salario = pago;
  let saludE = salud(pago);
  let pensionE = pension(pago);
  let arlE = arl(pago);

  let retencion = reten(pago);
  let subTrasporte = subTras(pago);
  let descuento = saludE + pensionE + arlE;

  let totalSalario = salario + subTrasporte - (retencion + descuento);

  return totalSalario;
}

//Como Expresión
const sueldoExp = function(pdiaT, pvalorD) {
    let diaT; //Dias Trabajados
    let valorD; //Valor por día
    let pago;
  
    diaT = pdiaT;
    valorD = pvalorD;
    pago = diaT * valorD;
    return pago;
  }
const saludExp =  function(pago) {
    let saludP = pago * 0.12;
    return saludP;
  }
  
const pensionExp = function(pago) {
    let pensionP = pago * 0.16;
    return pensionP;
  }
  
 const arlExp = function(pago) {
    let arlP = pago * 0.052;
    return arlP;
  }
  const subTrasExp = function(pago) {
    let salarioM = 1300000;
    let trans;
    if (pago <= salarioM * 2) {
      trans = 114000;
    } else {
      trans = 0;
    }
    return trans;
  }
  const retenExp = function(pago) {
    let salarioM = 1300000;
    let retencion;
    if (pago > salarioM * 4) {
      retencion = pago * 0.04;
    } else {
      retencion = 0;
    }
    return retencion;
  }
  
  const pagoTExp = function(pago) {
    let salario = pago;
    let saludE = salud(pago);
    let pensionE = pension(pago);
    let arlE = arl(pago);
  
    let retencion = reten(pago);
    let subTrasporte = subTras(pago);
    let descuento = saludE + pensionE + arlE;
  
    let totalSalario = salario + subTrasporte - (retencion + descuento);
  
    return totalSalario;
  }