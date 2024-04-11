/**
 * Tabla del 9 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */

let tablas;
let limite
//Como paramétro

function tabla(ptablas,plimite){
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
        if(resultado %2==0){

            msg += "par\n";
        }else{
            msg += "impar\n"
        }
    }

    return msg;
}

//Como Expresión

const tablaExp = function (ptablas,plimite){
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
        if(resultado %2==0){

            msg += "par\n";
        }else{
            msg += "impar\n"
        }
    }

    return msg;
}