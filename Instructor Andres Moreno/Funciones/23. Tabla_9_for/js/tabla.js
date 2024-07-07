/**
 * Tabla del 9 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */

let tabla;
let limite;

// como paramétros 

function tablas(ptablas,plimite){
    tabla = ptablas;
    limite = plimite;
    let contador;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado} `;
        msg+= validar(resultado);

    }
    return msg;
}

function validar(resultado){


    if(resultado%2==0){
     return "El resultado es  par\n";
        
    }else{
     return"El resultado es impar\n";
    }
   
}

//Como Expresión

const tablasExp = function (ptablas,plimite){
    tabla = ptablas;
    limite = plimite
    let contador;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tabla * contador;

        msg += `${tabla} x ${contador} = ${resultado}`;

        msg += validarExp(resultado);

    }
    return msg;
}

const validarExp = function(resultado){


    if(resultado%2==0){
     return " El resultado es  par\n";
        
    }else{
     return " El resultado es impar\n";
    }
}