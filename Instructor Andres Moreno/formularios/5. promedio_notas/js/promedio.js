/* 
fecha 17/06/2024
funcion calcular promedio
autor: Santiago GM
*/

function calcularProm() {

    let notaUno = parseFloat(document.getElementById("notaUno").value)
    let notaDos = parseFloat(document.getElementById("notaDos").value)
    let notaTres = parseFloat(document.getElementById("notaTres").value)

    if (notaUno && notaDos && notaTres) {

        let promedioUno = notaUno * 0.3
        let promedioDos = notaDos * 0.3 
        let promedioTres = notaTres * 0.4

        let sumar

        sumar = promedioUno + promedioDos + promedioTres

        document.getElementById("pantalla").innerHTML = `
            <strong>
                Datos: <br>
                Primera nota: ${notaUno}, su porcentaje es: ${promedioUno.toFixed(1)}% <br>
                Segunda nota: ${notaDos}, su porcentaje es: ${promedioDos.toFixed(1)}% <br>
                Tercera nota: ${notaTres}, su porcentaje es: ${promedioTres.toFixed(1)}% <br>
                Su promedio ea: ${sumar.toFixed(2)}
            </strong>`;

    } else {
        document.getElementById("panatlla").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }
    return false
}