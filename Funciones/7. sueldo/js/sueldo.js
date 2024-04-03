/**
 * Calcular el sueldo total de una persona 
 * Autor: Santiago GM
 * 02/04/2024
*/

let diaT;
let valorD;

function suledo(pdiaT,pvalorD){

    diaT = pdiaT;
    valorD = pvalorD;

    let pago;
    let salud;
    let pension;
    let arl;
    let descuento;
    let sueldoTo;

    pago = diaT * valorD;

    salud = pago * 0.12;
    pension = pago * 0.16;
    arl = pago * 0.052;
    descuento = salud+pension+arl;
    sueldoTo = pago-descuento

    return "Su pago es de: " + pago+".\n"+
           "El porcentaje para la salud es del "+salud+"%.\n"+
           "El porcentaje para  la pensión es del "+pension+"%. \n"+
           "Y el porcentaje para ARL es del "+arl+"%.\n"+
           "Por lo tanto, el monto a pagar en concepto de descuentos será de: "+descuento+".\n" +
           "Entonces, el Sueldo Total a Pagar es de: "+sueldoTo;

}