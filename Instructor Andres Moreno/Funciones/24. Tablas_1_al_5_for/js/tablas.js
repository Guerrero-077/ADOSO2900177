/**
 * Tablas del 1 al 5 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */

// Con paramétros
let par = 0;
let impar = 0;
let resultado;

function tablas(ptabla, plimite,plimiteT) {
  
  let limite;
  let limiteT;
  let tabla;
  let contador;
  let msg = "";
  
  tabla = ptabla;
  limite = plimite;
  limiteT = plimiteT
  
  for (tabla = 1; limite >= tabla; tabla++) {
    for (contador = 1; limiteT >= contador; contador++) {
      resultado = tabla * contador;

      msg += `\n ${tabla} x ${contador} = ${resultado}`;

      msg += validar(resultado);

    }
    msg += "\n";
  }
  return msg + "total de pares: " + par + "\n" + "total de impares " + impar;
}

function validar(resultado){
  
  if (resultado % 2 == 0){
    par ++
    return " Buzz";
  }else{
    impar++
    return " Bass";
  }
}

//Como Expresión
const tablasExp = function(ptabla, plimite,plimiteT) {
  
  let limite;
  let limiteT;
  let tabla;
  let contador;
  let msg = "";
  
  tabla = ptabla;
  limite = plimite;
  limiteT = plimiteT
  
  for (tabla = 1; limite >= tabla; tabla++) {
    for (contador = 1; limiteT >= contador; contador++) {
      resultado = tabla * contador;

      msg += `\n ${tabla} x ${contador} = ${resultado}`;

      msg += validarExp(resultado);

    }
    msg += "\n";
  }
  return msg + "total de pares: " + par + "\n" + "total de impares " + impar;
}

const validarExp = function(resultado){
  
  if (resultado % 2 == 0){
    par ++
    return " Buzz";
  }else{
    impar++
    return " Bass";
  }
}