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

function validar(valida){
    let msg = "";

    if(valida%2==0){
        msg+= "El resultado es  par\n";
        
    }else{
        msg+="El resultado es impar\n"
    }
    return msg;
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
        if(resultado%2==0){
            msg+= " Este es un par\n";
        }else{
            msg+=" Este es impar\n"
        }

    }
    return msg;
}