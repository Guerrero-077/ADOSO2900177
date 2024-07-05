/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function calcularProm() {

    let numUno = parseFloat(document.getElementById("NumUno").value)
    let numDos = parseFloat(document.getElementById("NumDos").value)

    if (numUno && numDos) {
        let pantalla = ""

        if (numUno > numDos) {
            pantalla = "El número uno es mayor: " + numUno
        }else{
            pantalla = "El número dos es mayor: " + numDos
            
        }

        document.getElementById("pantalla").innerHTML =  pantalla

    } else {
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }


    return false
}