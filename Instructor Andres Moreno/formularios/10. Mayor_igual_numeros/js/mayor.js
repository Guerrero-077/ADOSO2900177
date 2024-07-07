/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function numMayor() {

    let numUno = parseFloat(document.getElementById("NumUno").value)
    let numDos = parseFloat(document.getElementById("NumDos").value)

    if (numUno && numDos) {
        let pantalla = ""


        if (numUno==numDos) {
            pantalla = "Los número son iguales"
            
        }else if (numUno > numDos) {
            pantalla = "El número uno es mayor: " + numUno
        }else{
            pantalla = "El número dos es mayor: " + numDos
        }

        document.getElementById("pantalla").innerHTML = 
        `
            <h4>${pantalla}</h4>
        `;

    } else {
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben estar llenos </strong>`

    }


    return false
}