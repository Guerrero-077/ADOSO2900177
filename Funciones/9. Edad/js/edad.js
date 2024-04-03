/**
 * Calcular la edad de una persona
 * Autor: Santiago GM
 * 03/04/2024
 */
 function edades(pedad){

     let diferencia;
     let edad;
     edad = pedad;
     let fechaAc = new Date();
     let fechaNac =  new Date(edad);
     


    diferencia = fechaAc-fechaNac 
    edad = Math.floor(diferencia/(1000*60*60*24*365.25))
    return "Tu edad es: "+ edad +" años."
 }