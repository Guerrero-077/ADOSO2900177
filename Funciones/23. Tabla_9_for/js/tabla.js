
let tabla;

// como paramétros 

function tablas(ptablas){
    tabla = ptablas
    let contador;
    let limite = 5;
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

//Como Expresión

const tablasExp = function (ptablas){
    tabla = ptablas
    let contador;
    let limite = 5;
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