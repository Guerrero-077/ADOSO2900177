/**
 * Calcular el sueldo de una persona
 *Autor: Santiago GM
 *Fecha: 03/04/2024 
*/
let diaT;
let valorD;
function  calcularSueldo(pdiasT, pvalorD){
    diaT = pdiasT;
    valorD = pvalorD;

    let salario;
    let salud;
    let pension;
    let arl;
    let transporte;
    let retencion;

    let salarioM = 1300000;
    let totalS;

    salario = diaT * valorD;

    salud = salario * 0.12;
    pension = salario * 0.16;
    arl = salario * 0.052;
    
    
    if(salario<2*salarioM){
        transporte = 114000;
        
    }else{
        transporte=0;
    }
    
    if(salario > 4*salarioM){
        retencion = 0.04;
    }else{
        retencion = 0;
    }
    totalS = (salario+transporte)-(salud+arl+pension)
    
    return "El pago inicial de la persona es de: " + salario+".\n"+
           "El porcentaje para la salud es del "+salud+"%.\n"+
           "El porcentaje para  la pensión es del "+pension+"%. \n"+
           "El porcentaje para ARL es del "+arl+"%.\n"+
           "El subsidio de trasnporte es de: "+transporte+".\n"+
           "El porcentaje de retencion es de "+retencion+ "%. \n"+
           "Entonces, el Sueldo Total a Pagar es de: "+ totalS
}