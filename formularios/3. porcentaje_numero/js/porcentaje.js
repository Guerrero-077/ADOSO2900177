/* 
fecha 17/06/2024
funcion calcular el porcentaje de un número
autor: Santiago GM
*/

function calculaPorcentaje(){
    
    let numero = parseFloat(document.getElementById("numero").value) 

    if (numero) {
        let porcentaje 
    
        porcentaje = numero / 100
        document.getElementById("pantalla").innerHTML= `<strong> El porcentaje de ${numero} es: ${porcentaje}% </strong>`
        
    } else {
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
        
    }


    return false
}