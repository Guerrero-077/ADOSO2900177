/**
 * Calcular la edad de tres  personas y mostrarla por pantalla.
 * Autor: Santiago GM
 * Fecha 03/04/2034
 */

function edades(pfechaNacUno,pfechaNacDos,pfechaNacTres){

    let fechaNacUno = new Date(pfechaNacUno);
    let fechaNacDos = new Date(pfechaNacDos);
    let fechaNacTres = new Date(pfechaNacTres);
    let fechaAc = new Date();
    let edadUno;
    let edadDos;
    let edadTres;

    let diferenciaUno = fechaAc - fechaNacUno;
    edadUno = Math.floor(diferenciaUno / (1000 * 60 * 60 * 24 * 365.25));
    
    let diferenciaDos = fechaAc - fechaNacDos;
    edadDos = Math.floor(diferenciaDos / (1000 * 60 * 60 * 24 * 365.25));

    let diferenciaTres = fechaAc - fechaNacTres;
    edadTres = Math.floor(diferenciaTres / (1000 * 60 * 60 * 24 * 365.25));

    let resultado = '';

    if(edadUno >=18){
        resultado += "La edad es: "+edadUno+" años, Es mayor de edad .\n";
    }else{
        resultado += "La edad es: "+edadUno+" años, Es menor de edad .\n";
    }

    if(edadDos >=18){
        resultado += "La edad es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad es: "+edadDos+" años, Es menor de edad .\n";
    }

    if(edadTres >=18){
        resultado += "La edad es: "+edadTres+" años, Es mayor de edad .\n";
    }else{
        resultado += "La edad es: "+edadTres+" años, Es menor de edad ";
    }

    return resultado;

}

const edadesExp = function(pfechaNacUno,pfechaNacDos,pfechaNacTres){

    let fechaNacUno = new Date(pfechaNacUno);
    let fechaNacDos = new Date(pfechaNacDos);
    let fechaNacTres = new Date(pfechaNacTres);
    let fechaAc = new Date();
    let edadUno;
    let edadDos;
    let edadTres;

    let diferenciaUno = fechaAc - fechaNacUno;
    edadUno = Math.floor(diferenciaUno / (1000 * 60 * 60 * 24 * 365.25));
    
    let diferenciaDos = fechaAc - fechaNacDos;
    edadDos = Math.floor(diferenciaDos / (1000 * 60 * 60 * 24 * 365.25));

    let diferenciaTres = fechaAc - fechaNacTres;
    edadTres = Math.floor(diferenciaTres / (1000 * 60 * 60 * 24 * 365.25));

    let resultado = '';

    if(edadUno >=18){
        resultado += "La edad con Expresión es: "+edadUno+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad con Expresió es: "+edadUno+" años, Es menor de edad.\n";
    }

    if(edadDos >=18){
        resultado += "La edad con Expresió es: "+edadDos+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad con Expresió es: "+edadDos+" años, Es menor de edad.\n";
    }

    if(edadTres >=18){
        resultado += "La edad con Expresió es: "+edadTres+" años, Es mayor de edad.\n";
    }else{
        resultado += "La edad con Expresió es: "+edadTres+" años, Es menor de edad. ";
    }

    return resultado;

}

