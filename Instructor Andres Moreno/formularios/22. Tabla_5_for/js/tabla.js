/* 
fecha 17/06/2024
funcion tabla del 5 for
autor: Santiago GM
*/

function tablasM(){
    
    let tablas = document.getElementById("tablas").value 

    if (tablas) {
        
        let contador = 0;
        let resultado
        let msg = ''
        
    
        for(contador=1; 5 >= contador; contador ++ ){
    
            resultado = tablas * contador;
    
            msg += `${tablas} x ${contador} = ${resultado}`;
            msg += `<br>`
        }
    
        document.getElementById("pantalla").innerHTML= 
        `
            <strong>
                tabla del ${tablas}
                <br>
                ${msg}
            </strong>
        `
    } else {
        
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
    }

    return false
}