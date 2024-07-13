/**
 * tablas de multipicar con array
 * autor: SG
 * fecha: 10/07/24
 */


document.addEventListener('DOMContentLoaded', function(){

// arreglos que vamos a utilizar 
  let tablasM = [];
  let multiplicaciones = [];

  // variables que se van a usar 
  let iteracionT;
  let iteracionM;
  let contadorT;
  let contadorM;
  let resultado;
  let pantalla = ''


  // creamos la matriz que contendra las tablas 

  for (iteracionT = 0; iteracionT < 5; iteracionT++) {
    
    contadorT = iteracionT +  1;
    multiplicaciones = []

    for (iteracionM = 0; iteracionM < 10; iteracionM++) {
      contadorM = iteracionM + 1;
      resultado = contadorT * contadorM;

      multiplicaciones.push(resultado)  
    }
    tablasM.push(multiplicaciones)
    
  }

  // iteramos la matriz para empezar a mostrar los datos 

  for (iteracionT = 0; iteracionT < tablasM.length; iteracionT++) {

    contadorT = iteracionT + 1
    pantalla +=
    `
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${contadorT}" aria-expanded="false" aria-controls="flush-collapse${contadorT}">
        Tabla del #${contadorT}
      </button>
    </h2>
    <div id="flush-collapse${contadorT}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      
         <div class="accordion-body p-0 m-0">
           <table class="table table-success table-striped p-0 m-0">
           `
    for (iteracionM = 0; iteracionM < 10; iteracionM++) {

      contadorM = iteracionM +1

      pantalla += 
      `
        <tr>
          <td class='text-center'>${contadorT} x ${contadorM} = ${tablasM[iteracionT][iteracionM]}</td>
        </tr>
              
      `}
            
    pantalla += 
    `
          </table>
        </div>
      </div>
    </div>
    `
  }

  document.getElementById('accordionFlushExample').innerHTML = pantalla

})