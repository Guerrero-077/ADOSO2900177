/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function tablasM(){
    
    let tablas = parseInt(document.getElementById("tablas").value) 

    let contador = 0;
    let resultado
    let msg = ''
    

    for (contador = 1; 5 >= contador; contador++) {
        resultado = tablas * contador;
  
        msg += `${tablas} x ${contador} = ${resultado} `;
        msg += validar(resultado);
  
      }

    document.getElementById("pantalla").innerHTML = 
    `
        <h3>Tablas de multiplicar:</h3>
        <p> 
            ${msg}
        </p>
    `;

  return false
}

function validar(resultado){


    if(resultado%2==0){
     return "El resultado es  par <br>";
        
    }else{
     return"El resultado es impar <br>";
    }
   
}