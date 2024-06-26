/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function calculaPorcentaje(){
    
    let porcentaje = document.getElementById("txtSaludo").value 

    let pPorcentaje 

    pPorcentaje = porcentaje / 100
    document.getElementById("saludo").innerHTML= `<strong> El porcentaje de su número es: ${pPorcentaje}% </strong>`


    return false
}