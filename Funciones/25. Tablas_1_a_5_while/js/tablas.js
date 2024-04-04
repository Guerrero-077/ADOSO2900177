
let limite; 

// Como paramétros

function tablas(plimite){
    let tabla;
    let contador;
    let par;
    let impar;
    let resultado;
    let msg = "";

    tabla = 0;
    par = 0;
    impar = 0;
    
    while (tabla < limite) {

        contador = 0;
        tabla = tabla + 1;

        while (contador < limite) {
            contador = contador + 1;    
            resultado = tabla * contador;
            msg += `\n ${tabla} x ${contador} = ${resultado}`;

            if (resultado % 2 == 0) {
                par = par + 1;
                msg += " Buzz\n";
            } else {
                impar = impar + 1
                msg +=" Bass \n";
            }
        }
        msg += "\n"
        
    }
    return msg+"total de pares: "+par+"\n"+
                "total de impares "+impar;
}

//Como Exresión

const tablasExp = function (plimite){
    let tabla;
    let contador;
    let par;
    let impar;
    let resultado;
    let msg = "";

    tabla = 0;
    par = 0;
    impar = 0;
    
    while (tabla < limite) {

        contador = 0;
        tabla = tabla + 1;

        while (contador < limite) {
            contador = contador + 1;    
            resultado = tabla * contador;
            msg += `\n ${tabla} x ${contador} = ${resultado}`;

            if (resultado % 2 == 0) {
                par = par + 1;
                msg += " Buzz\n";
            } else {
                impar = impar + 1
                msg +=" Bass \n";
            }
        }
        msg += "\n"
        
    }
    return msg+"total de pares: "+par+"\n"+
                "total de impares "+impar;
}
