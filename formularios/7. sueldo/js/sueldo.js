/**
 * Calcular el sueldo total de una persona
 * Autor: Santiago GM
 * 02/04/2024
 */

function datos() {

  let diaT =  parseInt(document.getElementById('diaT').value)
  let valorD =  parseFloat(document.getElementById('valorD').value)
  let pantalla = document.getElementById('pantalla')

  
  if (diaT && valorD) {
    
    pantalla.innerHTML = 
    `
      <h5>Calcular el sueldo total de una persona: </h5>
      <br>
      <p>
      
      Su salario Bruto es: $${sueldo(diaT,valorD)} <br>
      Sus deducibles son: <br>
      El porcentaje salud es: ${salud(sueldo(diaT,valorD))}% <br>
      El porcentaje de pensión es: ${pension(sueldo(diaT,valorD))}% <br>
      El porcentaje de ARL es: ${arl(sueldo(diaT,valorD))}% <br>
      El pago Neto será de: $${pagoTotal(sueldo(diaT,valorD))}
      
      </p>
    `
  } else {
        pantalla.innerHTML = `<strong>Todos los campos deben esta llenos </strong>`
    
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
  function pagoTotal(pago) {
  
    let saludP = salud(pago);
    let pensionP = pension(pago);
    let arlP = arl(pago);
    let total = pago - (saludP + pensionP + arlP);
    return total;
  }
  