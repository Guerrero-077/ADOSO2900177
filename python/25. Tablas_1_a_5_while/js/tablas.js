/**
 * Tablas del 1 al 5 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */

let par = 0;
let impar = 0;
// Como paramétros

function tablas(ptabla, plimite, plimiteT) {
  let tabla;
  let limite;
  let limiteT;

  let contador;
  let resultado;
  let msg = "";
  tabla = ptabla;
  limite = plimite;
  limiteT = plimiteT;

  while (tabla < limite) {
    contador = 0;
    tabla = tabla + 1;

    while (contador < limiteT) {
      contador = contador + 1;
      resultado = tabla * contador;
      msg += `\n ${tabla} x ${contador} = ${resultado}`;
      msg += validar(resultado);
    }
    msg += "\n";
  }
  return (
    msg + "\n" + "total de pares: " + par + "\n" + "total de impares " + impar
  );
}

function validar(resultado) {
  if (resultado % 2 == 0) {
    par = par + 1;
    return " Buzz";
  } else {
    impar = impar + 1;
    return " Bass";
  }
}

//Como Expresión
const tablasExp = function(ptabla, plimite, plimiteT) {
    let tabla;
    let limite;
    let limiteT;
  
    let contador;
    let resultado;
    let msg = "";
    tabla = ptabla;
    limite = plimite;
    limiteT = plimiteT;
  
    while (tabla < limite) {
      contador = 0;
      tabla = tabla + 1;
  
      while (contador < limiteT) {
        contador = contador + 1;
        resultado = tabla * contador;
        msg += `\n ${tabla} x ${contador} = ${resultado}`;
        msg += validarExp(resultado);
      }
      msg += "\n";
    }
    return (
      msg + "\n" + "total de pares: " + par + "\n" + "total de impares " + impar
    );
  }
  
const validarExp = function(resultado) {
    if (resultado % 2 == 0) {
      par = par + 1;
      return " Buzz";
    } else {
      impar = impar + 1;
      return " Bass";
    }
  }