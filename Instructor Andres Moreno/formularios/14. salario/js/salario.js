/* 
fecha 17/06/2024
funcion salario de una persona (Nomina)
autor: Santiago GM
*/

function datos() {

  let diasT = parseInt(document.getElementById('diaT').value)
  let valorD = parseFloat(document.getElementById('valorD').value.replace(/[,\.]/g, ''))
  let pantalla = document.getElementById('pantalla')

  if (diasT && valorD ) {
    
    pantalla.innerHTML = 
    `
      <h1>Salario</h1>
      <p>
          Su salario Bruto es de: $${sueldo(diasT,valorD)} <br>
          El porcenta de Salud es de: ${salud(sueldo(diasT,valorD))} <br>
          El porcenta de  Pensión es de: ${pension(sueldo(diasT,valorD))} <br>
          El porcenta de ARL es de: ${arl(sueldo(diasT,valorD))} <br>
          El subsidio de trasporte es de: $${subTras(sueldo(diasT,valorD))} <br>
          La retencion es de:  ${reten(sueldo(diasT,valorD)) }<br>
          Su salario Neto será de: ${pagoT(sueldo(diasT,valorD))}
      </p>
    `
  } else {
    pantalla.innerHTML = `<strong>Todos los campos deben estar llenos </strong>`
    
  }


  return false
}

function sueldo(diaT, valorD) {
  let pago = diaT * valorD;
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
  
  let saludE = salud(pago);
  let pensionE = pension(pago);
  let arlE = arl(pago);
  let retencion = reten(pago);
  let subTrasporte = subTras(pago);

  let descuento = saludE + pensionE + arlE;

  let totalSalario = pago + subTrasporte - (retencion + descuento);

  return totalSalario;
}