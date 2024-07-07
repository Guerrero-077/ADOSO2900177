/**
 * Tabla del 9 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */

let resultado;
//Como paramétro

function tabla(ptablas,plimite){
    let tablas;
    let limite
    tablas = ptablas;
    limite = plimite
    let contador;
    let msg="";
    contador = 0;
    msg = "";

    while (contador<limite) {
        contador = contador +1
        resultado = tablas * contador;

        msg += `${tablas} x ${contador} = ${resultado} `;
        msg += validar(resultado)

    }

    return msg;
}

function validar(resultado){
        if(resultado %2==0){

           return "par\n";
        }else{
           return "impar\n"
        }
}

//Como Expresión

const tablaExp = function (ptablas,plimite){
    let tablas;
    let limite
    tablas = ptablas;
    limite = plimite
    let contador;
    let msg="";
    let resultado;
    contador = 0;
    msg = "";

    while (contador<limite) {
        contador = contador +1
        resultado = tablas * contador;

        msg += `${tablas} x ${contador} = ${resultado} `

        msg += validarExp(resultado);
    }

    return msg;
}


function validarExp(resultado){
        if(resultado %2==0){

           return "par\n";
        }else{
           return "impar\n"
        }
}