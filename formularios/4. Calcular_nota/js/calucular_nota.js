/* 
fecha 17/06/2024
funcion calcular promedio
autor: Santiago GM
*/

function pronmNotas(){
    
    let notaUno = parseFloat(document.getElementById("NumUno").value)
    let notaDos = parseFloat(document.getElementById("NumDos").value) 
    let notaTres = parseFloat(document.getElementById("NumTres").value) 

    
    if (notaUno && notaDos && notaTres) {


        let promedio    
        promedio = (notaUno + notaDos + notaTres)/3
        document.getElementById("pantalla").innerHTML = `<strong> El promedio de las notas ${notaUno}, ${notaDos} y ${notaTres} es: ${promedio} </strong>`
        

    }else{
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }


    return false
}