/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function calculaPorcentaje(){
    
    let notaUno = parseFloat(document.getElementById("NumUno").value)
    let notaDos = parseFloat(document.getElementById("NumDos").value) 
    let notaTres = parseFloat(document.getElementById("NumTres").value) 

    
    if (notaUno && notaDos && notaTres) {


        let promedio    
        promedio = (notaUno + notaDos + notaTres)/3
        document.getElementById("saludo").innerHTML = `<strong> Su promedio es: ${promedio} </strong>`
        

    }else{
        document.getElementById("saludo").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }


    return false
}