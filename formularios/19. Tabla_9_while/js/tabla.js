/* 
fecha 17/06/2024
funcion saludo 
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
                    Tablas<br>
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
    if(resultado %2==0){

       return "par <br>";
    }else{
       return "impar <br>"
    }
}