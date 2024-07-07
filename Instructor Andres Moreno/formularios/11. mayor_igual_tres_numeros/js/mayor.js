/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function numMayor() {

    let numUno = parseFloat(document.getElementById("NumUno").value)
    let numDos = parseFloat(document.getElementById("NumDos").value)
    let numTres = parseFloat(document.getElementById("NumTres").value)

    if (numUno && numDos && numTres) {
        let pantalla = ""


        if (numUno==numDos && numUno == numTres && numDos == numTres) {
            pantalla = "Los números son iguales"
            
        }else if (numUno > numDos && numUno > numTres) {
            pantalla = `El números uno es el mayor: ${numUno}`
        }else if(numDos > numUno && numDos > numTres){
            pantalla = `El número dos es el mayor: ${numDos}`;
            
        }else{
            pantalla = `El número tres es el mayor: ${numTres}` 
        }


        document.getElementById("pantalla").innerHTML =  
        `
            <h4>${pantalla}</h4>
        `

    } else {
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben estar llenos </strong>`

    }


    return false
}
