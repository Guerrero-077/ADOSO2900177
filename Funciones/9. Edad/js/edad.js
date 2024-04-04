/**
 * Calcular la edad de una persona
 * Autor: Santiago GM
 * 03/04/2024
 */
//Como paramétro
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
 //Como Expresión

 const edadesExp =  function (pedad){

    let diferencia;
    let edad;
    edad = pedad;
    let fechaAc = new Date();
    let fechaNac =  new Date(edad);
    


   diferencia = fechaAc-fechaNac 
   edad = Math.floor(diferencia/(1000*60*60*24*365.25))
   return "Tu edad es: "+ edad +" años."
}