/**
 * Calcular la edad de una persona
 * Autor: Santiago GM
 * 03/04/2024
 */
//Como paramétro

let fechaAc;
let fechaNac;
function edades(pfechaAc, pfechaNac) {

   fechaAc = pfechaAc;
   fechaNac = pfechaNac;

  let diferencia;
  let edad;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return "Tu edad es: " + edad + " años.";
}

//Como Expresión

const edadesExp = function (pfechaAc, pfechaNac) {
   fechaAc = pfechaAc;
   fechaNac = pfechaNac;

  let diferencia;
  let edad;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return "Tu edad es: " + edad + " años.";
};
