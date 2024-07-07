/* 
fecha 17/06/2024
funcion tabla del 9 while
autor: Santiago GM
*/

function tablasM(){
    
    let tablas = document.getElementById("tablas").value 

    if (tablas) {
        
        let resultado
        let contador = 0 
        let msg = ''
        while (contador < 5) {
    
            contador = contador +1;
            resultado = tablas * contador; 
    
            msg += `${tablas} x ${contador} = ${resultado} `
            msg += validar(resultado) 
            document.getElementById("pantalla").innerHTML= 
            `
                <strong>
                    Tablas ${tablas}<br>
                    ${msg}
                </strong>
            `
        }
    } else {
        document.getElementById("pantalla").innerHTML= `<strong>Todos los campos deben estar llenos</strong>`
        
    }

    return false
}

function validar(resultado){
    let msg = ''

    if(resultado %2==0){

       msg = "par <br>";
    }else{
       msg = "impar <br>"
    }
    return msg
}