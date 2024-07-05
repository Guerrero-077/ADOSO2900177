/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function tablasM(){
    
    let tablas = document.getElementById("tablas").value 

    if (tablas) {
        let contador = 0;
        let resultado
        let msg = ''
        
        while (contador < 5) {
    
            contador = contador +1;
            resultado = tablas * contador; 
    
            msg += `${tablas} x ${contador} = ${resultado} <br>` 
        }
    
        document.getElementById("pantalla").innerHTML= 
        `
            <strong>
                <h4>Tabla</h4>
                ${msg}
            </strong>
        `
        
    } else {
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
                
    }

    return false
}

document.getElementById("operaciones").innerHTML= 
`
    <strong>Edad uno: ${pantalla}</strong>
`
