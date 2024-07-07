/* 
fecha 17/06/2024
funcion contador for
autor: Santiago GM
*/

function contar(){
    
    let numero = document.getElementById("numero").value 

    if (numero) {
        let contador = 0;
        let resultado = "";
    
        for(contador = 1; numero >= contador; contador ++){
    
            resultado += contador + "<br>";
        }
        document.getElementById("pantalla").innerHTML= `<strong>${resultado}</strong>`
        
    } else {
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
        
    }

    return false
}