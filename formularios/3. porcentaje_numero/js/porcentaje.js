/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function calculaPorcentaje(){
    
    let porcentaje = parseFloat(document.getElementById("txtSaludo").value) 

    if (porcentaje) {
        let pPorcentaje 
    
        pPorcentaje = porcentaje / 100
        document.getElementById("saludo").innerHTML= `<strong> El porcentaje de su número es: ${pPorcentaje}% </strong>`
        
    } else {
        document.getElementById("saludo").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
        
    }


    return false
}