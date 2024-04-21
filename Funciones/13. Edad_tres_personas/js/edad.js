/**
 * Calcular la edad de tres  personas y mostrarla por pantalla.
 * Autor: Santiago GM
 * Fecha 03/04/2034
 */

//como parámetro

function edades(pfechaAc, pfechaNac) {
  let fechaAc;
  let fechaNac;
  fechaAc = pfechaAc;
  fechaNac = pfechaNac;

  let diferencia;
  let edad;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}

function validar(pedadP) {
  let edadP;
  edadP = pedadP;

  if (edadP >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

function promedio(psuma, pnumEdad) {
  let suma;
  let numEdad;
  let promedio;

  suma = psuma;
  numEdad = pnumEdad;

  promedio = suma / pnumEdad;

  if (promedio >= 18) {
    return "El promedio de edad se encuentra detro de la mayoria de edad " + promedio;
  } else {
    return "El promedio de edad no se encuentra dentro de la mayoria de edad " + promedio;
  }
}

//Comom Expresión
const edadesExp = function (pfechaAc, pfechaNac) {
  let fechaAc;
  let fechaNac;
  let diferencia;
  let edad;

  fechaAc = pfechaAc;
  fechaNac = pfechaNac;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}

const validarExp = function (pedadP) {
  let edadP;
  edadP = pedadP;

  if (edadP >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

const promedioExp = function (psuma, pnumEdad) {
  let suma;
  let numEdad;
  let promedio;

  suma = psuma;
  numEdad = pnumEdad;

  promedio = suma / pnumEdad;

  if (promedio >= 18) {
    return (
      "El promedio de edad se encuentra detro de la mayoria de edad " + promedio
    );
  } else {
    return (
      "El promedio de edad no se encuentra dentro de la mayoria de edad " +
      promedio
    );
  }
}
