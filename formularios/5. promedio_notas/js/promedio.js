/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function calcularProm() {

    let notaUno = parseFloat(document.getElementById("NumUno").value)
    let notaDos = parseFloat(document.getElementById("NumDos").value)
    let notaTres = parseFloat(document.getElementById("NumTres").value)

    if (notaUno && notaDos && notaTres) {

        let nota1
        let nota2
        let nota3

        nota1 = notaUno * 0.3
        nota2 = notaDos * 0.3
        nota3 = notaDos * 0.4

        let suma

        suma = nota1 + nota2 + nota3
        document.getElementById("saludo").innerHTML = `<strong> 
        Datos: <br> la primera nota es: ${notaUno} su porcentaje es: ${nota1}% <br>  
        la segunda nota es: ${notaDos} su porcentaje es: ${nota2}% <br>
        la tercera nota es: ${notaTres} su porcentje es:  ${nota3}% <br>
        la suma es: ${suma}</strong>`

    } else {
        document.getElementById("saludo").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }


    return false
}