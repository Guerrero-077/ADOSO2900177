/**
 * Mayor de dos números  
 * Autor: Santiago GM
 * 03/04/2024
*/

let numUno;
let numDos;

//como paramétro
function mayor(pnumUno, pnumDos){
    numUno = pnumUno;
    numDos = pnumDos;

    if(numUno> numDos){
      return "El numero uno es mayor "+numUno
    }else{
        return "El numero dos es mayor " + numDos
    }
  
}

//como Expresión
const mayorExp= function (pnumUno, pnumDos){
  numUno = pnumUno;
  numDos = pnumDos;

  if(numUno> numDos){
    return "El numero uno es mayor "+numUno
  }else{
      return "El numero dos es mayor " + numDos
  }

}