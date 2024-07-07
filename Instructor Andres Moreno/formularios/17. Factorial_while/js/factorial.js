/* 
fecha 17/06/2024
funcion factorial con while
autor: Santiago GM
*/

function factor(){
    
    let numero = document.getElementById("numero").value 

    if (numero) {
        
        let factorial = 1;
        let contador = 0;
    
        while(contador < numero){
            contador = contador+1;
            factorial =factorial*contador;
        } 
        document.getElementById("pantalla").innerHTML= `<strong>El factorial de ${numero} es: ${factorial}</strong>`
    } else {
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
        
    }

    return false
}