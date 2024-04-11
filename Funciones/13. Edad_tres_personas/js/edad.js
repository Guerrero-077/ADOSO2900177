/**
 * Calcular la edad de tres  personas y mostrarla por pantalla.
 * Autor: Santiago GM
 * Fecha 03/04/2034
 */


//como paamétro

let fechaAc;
let fechaNac;
function edades(pfechaAc, pfechaNac) {

   fechaAc = pfechaAc;
   fechaNac = pfechaNac;

  let diferencia;
  let edad;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}

let edadUno;
let edadDos;
let edadTres;
let resultado = "";

function validar(pedadUno,pedadDos,pedadTres){

    edadUno = pedadUno;
    edadDos = pedadDos;
    edadTres = pedadTres

    if(edadUno >=18){
        resultado += "La edad es: "+edadUno+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadUno+" años, Es menor de edad.\n";
    }

    if(edadDos >=18){
        resultado += "La edad es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadDos+" años, Es menor de edad.\n";
    }

    if(edadTres >=18){
        resultado += "La edad es: "+edadTres+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadTres+" años, Es menor de edad. ";
    }

    return resultado;

}

//Comom Expresión
const edadesExp = function(pfechaAc, pfechaNac) {

   fechaAc = pfechaAc;
   fechaNac = pfechaNac;

  let diferencia;
  let edad;

  diferencia = fechaAc - fechaNac;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}



const validarExp = function(pedadUno,pedadDos,pedadTres){

    edadUno = pedadUno;
    edadDos = pedadDos;
    edadTres = pedadTres

    if(edadUno >=18){
        resultado += "La edad es: "+edadUno+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadUno+" años, Es menor de edad.\n";
    }

    if(edadDos >=18){
        resultado += "La edad es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadDos+" años, Es menor de edad.\n";
    }

    if(edadTres >=18){
        resultado += "La edad es: "+edadTres+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadTres+" años, Es menor de edad. ";
    }

    return resultado;

}