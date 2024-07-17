/**
 * Ejercicio del bingo con arreglos
 * fecha:
 * Autor: SG
 */

document.addEventListener("DOMContentLoaded", function () {
  // arreglos

  let bingo = [];
  let tablas = [];

  // variables

  let iteracionT;
  let iteracionM;
  let contadorM = 0;
  let resultado;

  for (iteracionT = 0; iteracionT < 5; iteracionT++) {
    tablas = [];
    for (iteracionM = 0; iteracionM < 5; iteracionM++) {
      contadorM++;
      resultado = contadorM * 3;
      tablas.push(resultado);
    }
    bingo.push(tablas);
  }
  // console.log(bingo);
  

  function mostrarBngo() {
  let pantalla = "";

    pantalla += `

    <div class='col-6'>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">B</th>
          <th scope="col">I</th>
          <th scope="col">N</th>
          <th scope="col">G</th>
          <th scope="col">O</th>
        </tr>
      </thead>
      <tbody>
    `;
    for (iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += ` <tr>`;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`;
      }
      pantalla += `</tr>`;
    }
    pantalla += `
      </tbody>
    </table>
    </div>
    `;
    return pantalla;
  }

 

  //Letra B

  function mostrarLetras() {
  let pantalla = "";

    letras = ["B", "I", "N", "G", "O"];
    contadorM = 0;
    pantalla += `<div class='col-6'>`;
    for (iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += ` 
    
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${iteracionT}" aria-expanded="false" aria-controls="flush-collapse${iteracionT}">
          Bingo Letra ${letras[iteracionT]}
        </button>
      </h2>
      <div id="flush-collapse${iteracionT}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <div class='row justify-content-center'>
            <div class="col-3">
            <table class="table table-success table-striped">
              <thead>
                <tr><th scope="col">${letras[iteracionT]}</th></tr>
              </thead>
              <tbody>`;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        pantalla += `<tr><td>${bingo[iteracionM][contadorM]}</td></tr>`;
      }
      pantalla += ` 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>`;
      contadorM++;
    }
    pantalla += `</div>`;

    return pantalla;
  }



  function mostrarXGrande() {
  let pantalla = "";

    let x1 = [];

    for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
      x1.push(bingo[iteracionM][iteracionM]);
      x1.push(bingo[iteracionM][4 - iteracionM]);
    }

    pantalla += `
    <div class="accordion accordion-flush" id="xGrande" class='mt-4'>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-xGrande" aria-expanded="false" aria-controls="flush-xGrande">
          x Grande
        </button>
      </h2>
      <div id="flush-xGrande" class="accordion-collapse collapse" data-bs-parent="#xGrande">
        <div class="accordion-body">
  <table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">B</th>
        <th scope="col">I</th>
        <th scope="col">N</th>
        <th scope="col">G</th>
        <th scope="col">O</th>
      </tr>
    </thead>
    <tbody>
    </div>
    </div>
  </div>

  `;

    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr>`;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        let clase = "";

        if (x1.includes(bingo[iteracionT][iteracionM])) {
          pantalla += `<td class="x1">${bingo[iteracionT][iteracionM]}</td>`;
        } else {
          pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`;
        }
      }
      pantalla += `</tr>`;
    }

    pantalla += `
  </tbody>
  </table>
  </div>
    </div>
  </div>`;

    return pantalla;
  }

  
  function mostrarX() {
  let pantalla = "";

    // mostrar las x

    let x2 = [];
    let x3 = [];
    let x4 = [];

    for (let iteracionM = 0; iteracionM < 3; iteracionM++) {
      //Sacar x media
      x2.push(bingo[iteracionM][1 + iteracionM]);
      x2.push(bingo[iteracionM][3 - iteracionM]);

      // Sacar x Mediana

      x3.push(bingo[iteracionM + 2][iteracionM]);
      x3.push(bingo[iteracionM + 2][2 - iteracionM]);

      //Sacar x chiquita

      x4.push(bingo[2 + iteracionM][2 + iteracionM]);
      x4.push(bingo[2 + iteracionM][4 - iteracionM]);
    }
    pantalla += `


<div class="accordion accordion-flush" id="xPeque">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-xPeque" aria-expanded="false" aria-controls="flush-xPeque">
        X Pequeñas
      </button>
    </h2>
    <div id="flush-xPeque" class="accordion-collapse collapse" data-bs-parent="#xPeque">
      <div class="accordion-body">
<table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col">N</th>
      <th scope="col">G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody>
`;

    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr>`;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        let clase = "";
        if (x2.includes(bingo[iteracionT][iteracionM])) {
          clase = "x2"; // Clase para x2
        } else if (x3.includes(bingo[iteracionT][iteracionM])) {
          clase = "x3"; // Clase para x3
        } else if (x4.includes(bingo[iteracionT][iteracionM])) {
          clase = "x4"; // Clase para x4
        }

        if (clase !== "") {
          pantalla += `<td class="${clase}">${bingo[iteracionT][iteracionM]}</td>`;
        } else {
          pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`;
        }
      }
      pantalla += `</tr>`;
    }

    pantalla += `
  </tbody>
</table>
    </div>
  </div>
</div>

`;

    return pantalla;
  }
  document.getElementById("mostrar").innerHTML =  "<div class='row'>" + mostrarBngo() + mostrarLetras() + mostrarXGrande() + mostrarX()+'</div>';
});
