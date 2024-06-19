/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function saludar(){
    
    let saludo = document.getElementById("txtSaludo").value 
    document.getElementById("saludo").innerHTML= `<strong>${saludo}</strong>`

    return false
}