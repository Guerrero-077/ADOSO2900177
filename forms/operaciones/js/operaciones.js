/* 
fecha 17/06/2024
funcion operaciones 
autor: Santiago GM
*/

function operaciones(){
    
    let numUno = parseInt(document.getElementById("txtNumUno").value)
    let numDos = parseInt(document.getElementById("txtNumDos").value) 

    let suma
    let resta
    let multiplicacion
    let division
    let rSuma
    let rResta
    let rMultiplicacion
    let rDivision


    suma = numUno + numDos
    resta = numUno - numDos
    multiplicacion = numUno * numDos
    division = numUno / numDos

    rSuma = `suma: ${suma} <br>` 
    rResta = `resta: ${resta} <br>` 
    rMultiplicacion = `multiplcacion: ${multiplicacion} <br>` 
    rDivision = `division: ${division} <br>` 

    document.getElementById("saludo").innerHTML = rSuma + rResta + rMultiplicacion + rDivision

    return false
}