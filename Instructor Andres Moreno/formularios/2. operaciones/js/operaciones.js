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

    rSuma = `El resultado de sumar ${numUno} y ${numDos} es: ${suma} <br>` 
    rResta = `El resultado de restar ${numUno} y ${numDos} es: ${resta} <br>` 
    rMultiplicacion = `El resultado de multiplicar ${numUno} y ${numDos} es: ${multiplicacion} <br>` 
    rDivision = `El resultado de dividir ${numUno} y ${numDos} es: ${division} <br>` 
    document.getElementById("saludo").innerHTML = rSuma + rResta + rMultiplicacion + rDivision

    return false
}