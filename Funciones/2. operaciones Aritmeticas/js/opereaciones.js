/**
 * Operaciones Aritméticas
 * Autor: Santiago GM
 * 01/04/2024
*/

let numUno;
let numDos;


// con parametros 

 function suma(pnumUno,pnumDos){

    let sumar;
    numUno = pnumUno;
    numDos =pnumDos

    sumar = numUno + numDos;

    return sumar;
}

function resta(pnumUno,pnumDos){

    let restar;
    numUno = pnumUno;
    numDos =pnumDos

    restar = numUno - numDos;

    return restar;
}

function multiplicacion(pnumUno,pnumDos){

    let multiplicar;
    numUno = pnumUno;
    numDos =pnumDos

    multiplicar = numUno * numDos;

    return multiplicar;
}

function division(pnumUno,pnumDos){

    let dividir;
    numUno = pnumUno;
    numDos =pnumDos

    dividir = numUno / numDos;

    return dividir;
}

function operaciones(poerador,pnumUno,pnumDos){

    let operador = poerador;
    numUno = pnumUno;
    numDos = pnumDos;

    if(operador == suma ){

        return suma(numUno,numDos);

    }else if(operador == resta ){

        return resta(numUno,numDos);
        
    }else if(operador == multiplicacion ){

        return multiplicacion(numUno,numDos);
    
        
    }else if(operador == division){

        return division(numUno,numDos);
        
        
    }else{

        return "operacion no valida";
    }

}
 
//Expresion 

const sumaExp = function(pnumUno,pnumDos){

    let sumar;
    numUno = pnumUno;
    numDos =pnumDos

    sumar = numUno + numDos;

    return sumar;
}

const restaExp = function(pnumUno,pnumDos){

    let restar;
    numUno = pnumUno;
    numDos =pnumDos

    restar = numUno - numDos;

    return restar;
}

const multiplicacionExp = function(pnumUno,pnumDos){

    let multiplicar;
    numUno = pnumUno;
    numDos =pnumDos

    multiplicar = numUno * numDos;

    return multiplicar;
}

const divisionExp = function(pnumUno,pnumDos){

    let dividir;
    numUno = pnumUno;
    numDos =pnumDos

    dividir = numUno / numDos;

    return dividir;
}




const operacionesExp = function(poerador,pnumUno,pnumDos){

    let operador = poerador;
    numUno = pnumUno;
    numDos = pnumDos;

    if(operador == sumaExp){

        
        return sumaExp(numUno,numDos);
        
    }else if(operador == restaExp){

        
        return restaExp(numUno,numDos);
        
    }else if( operador == multiplicacionExp ){

        
        return multiplicacionExp(numUno,numDos);
        
    }else if(operador == divisionExp){

        
        return divisionExp(numUno,numDos);
        
    }else{

        return "operacion no valida";
    }

}

