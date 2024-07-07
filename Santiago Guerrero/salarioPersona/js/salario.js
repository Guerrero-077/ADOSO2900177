/*
salario
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
const salarioM = 1300000;

function sueldo(diasT, valorD) {
    let sueldo = diasT * valorD;
    return sueldo;
  }
  function modifSueldoTransporte(sueldo){
    let subTrans;
    if(sueldo <= salarioM * 2 ){
        subTrans = 140000
    }
    else{
        subTrans = 0;
    }

    return subTrans;
}
function modifSueldoRetencion(sueldo){
    let retencion;
    let valorDeducion = 0.04;
    if(sueldo >= salarioM * 4){
        retencion = sueldo * valorDeducion; 
    }else{
        retencion = 0; 
    }
    return retencion
}
function arl(sueldo){
    let rltArl;
    rltArl = sueldo * 0.052;
    return rltArl
}
function salud(sueldo){
    let rltSalud;
    rltSalud = sueldo * 0.12;
    return rltSalud
}
function pension(sueldo){
    let rltPension;
    rltPension = sueldo * 0.16;
    return rltPension
}
function pagoTotal(sueldo){
    let pensionn = pension(sueldo);
    let saludd = salud(sueldo);
    let arll = arl(sueldo);
    let subsidio = modifSueldoTransporte(sueldo);
    // let reten = modifSueldoRetencion(sueldo);
    let pagoT = (sueldo + subsidio) - (pensionn + arll + saludd /*+ reten*/);
    return pagoT;
}

function mandar(){
    let diasTrabajados = document.getElementById('txtDiasT').value;
    let valorDia = document.getElementById('txtValorD').value;

    if(diasTrabajados && valorDia){
        let sueldoP = sueldo(diasTrabajados, valorDia);
        let subsidio = modifSueldoTransporte(sueldoP);
        let reten = modifSueldoRetencion(sueldoP);
        let pensionn = pension(sueldoP);
        let saludd = salud(sueldoP);
        let arll = arl(sueldoP);
        let pagoT = pagoTotal(sueldoP);
        let consola = "";
      
        consola += `<div class="respuesta">`;
        consola += `<p>Sueldo: ${sueldoP}</p>`
        consola += `<p>Subsidio de transporte: ${subsidio}</p>`
        // consola += `<p>Retención: ${reten}</p>`
        consola += `<p>Pensión: ${pensionn}</p>`
        consola += `<p>Salud: ${saludd}</p>`
        consola += `<p>ARL: ${arll}</p>`
        consola += `<p>Pago total: ${pagoT}</p>`
        consola += `</div>`

        document.getElementById('operacion').innerHTML = consola;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    }
  
    return false;  
}