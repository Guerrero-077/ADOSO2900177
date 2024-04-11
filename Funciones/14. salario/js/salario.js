/**
 * Calcular el sueldo de una persona
 *Autor: Santiago GM
 *Fecha: 03/04/2024 
*/

//Como paramétro

let diasT;  //Dias Trabajados
let valorD; //Valor por día
let operaciones; 
let salario;
let pSalud; //Porcentaje de salud 
let pPension;   //Porcetaje de pension
let pArl;   //Porcentaje de ARL
let salarioM; //Salario Minimo
let trasnporteP;
let retencionP;

function sueldo(pdiasT,pvalorD){
    
    diasT = pdiasT;
    valorD = pvalorD;
    salario = diasT * valorD;
    return salario;

}
function salud(psalario,ppSalud){
    salario = psalario;
    pSalud = ppSalud;

    operaciones = salario * pSalud;
    return operaciones;
}
function pension(psalario,ppPension){
    salario = psalario;
    pPension = ppPension;

    operaciones = salario * ppPension;
    return operaciones;
}
function arl(psalario,ppArl){
    salario = psalario;
    pArl = ppArl;

    operaciones = salario * ppArl;
    return operaciones;

}

function validacion(psalario,psalarioM,ptrasnporte,pretencion){
    salario = psalario;
    salarioM = psalarioM;
    trasnporteP = ptrasnporte;
    retencionP = pretencion;
    if(salario <= salarioM * 2){
        trasnporteP = ptrasnporte;
    }else{
        trasnporteP = 0
    }

    if(salario > salarioM * 4){

        retencionP = salario * pretencion;
    }else{
        retencionP = 0;
    }

    return  {
        trasnporteP,
        retencionP
    };
    
}

//Como Expresión 
const sueldoExp = function(pdiasT,pvalorD){
    
    diasT = pdiasT;
    valorD = pvalorD;
    salario = diasT * valorD;
    return salario;

}
const saludExp = function(psalario,ppSalud){
    salario = psalario;
    pSalud = ppSalud;

    operaciones = salario * pSalud;
    return operaciones;
}
const pensionExp = function(psalario,ppPension){
    salario = psalario;
    pPension = ppPension;

    operaciones = salario * ppPension;
    return operaciones;
}
const arlExp = function(psalario,ppArl){
    salario = psalario;
    pArl = ppArl;

    operaciones = salario * ppArl;
    return operaciones;

}

const validacionExp = function(psalario,psalarioM,ptrasnporte,pretencion){
    salario = psalario;
    salarioM = psalarioM;
    trasnporteP = ptrasnporte;
    retencionP = pretencion;
    if(salario <= salarioM * 2){
        trasnporteP = ptrasnporte;
    }else{
        trasnporteP = 0
    }

    if(salario > salarioM * 4){

        retencionP = salario * pretencion;
    }else{
        retencionP = 0;
    }

    return  {
        trasnporteP,
        retencionP
    };
    
}