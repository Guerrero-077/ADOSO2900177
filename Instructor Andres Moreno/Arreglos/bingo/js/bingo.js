/**
 * Ejercicio del bingo con arreglos
 * fecha:
 * Autor: SG
 */

document.addEventListener("DOMContentLoaded", function () {
  let info = document.getElementById("mostrar");

  let btnEnviar = document.getElementById("btnEnviar");
  let btnB = document.getElementById("btnB");
  let btnI = document.getElementById("btnI");
  let btnN = document.getElementById("btnN");
  let btnG = document.getElementById("btnG");
  let btnO = document.getElementById("btnO");
  let btnXG = document.getElementById("btnXG");
  let btnXP = document.getElementById("btnXP");

  // creamos la matriz que va a contener el bingo 
  function matriz(numero) {
    let bingo = [];
    let tablas = [];
    let contadorM = 0;
    let resultado;

    for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
      tablas = [];
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        contadorM++;
        resultado = contadorM * numero;
        tablas.push(resultado);
      }
      bingo.push(tablas);
    }
    return bingo;
  }

  // capturamos los datos que necesitamos y mostramos el Bingo 
  btnEnviar.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;
    let msgError = document.getElementById("msgError");

    if (numero && numero > 0) {
      msgError.textContent = "";

      btnB.style.display = "block";
      btnI.style.display = "block";
      btnN.style.display = "block";
      btnG.style.display = "block";
      btnO.style.display = "block";
      btnXG.style.display = "block";
      btnXP.style.display = "block";

      let bingo = matriz(numero);
      let generarB = generarBingo(bingo);
      info.innerHTML = generarB;
    } else {
      btnB.style.display = "none";
      btnI.style.display = "none";
      btnN.style.display = "none";
      btnG.style.display = "none";
      btnO.style.display = "none";
      btnXG.style.display = "none";
      btnXP.style.display = "none";

      msgError.textContent = "Por favor ingrese un número";
      info.innerHTML = "";
    }

    function generarBingo(bingo) {
      let pantalla = "";

      pantalla += `
      <table class="table table-info table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">O</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
      `;

      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr>`;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          pantalla += `<td>${bingo[iteracionT][iteracionM]}</td>`;
        }
        pantalla += `</tr>`;
      }

      pantalla += `
          </tbody>
        </table>
      `;
      return pantalla;
    }
  });

  btnB.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;

    let bingo = matriz(numero);
    let mostrarB = letraB(bingo);

    function letraB(bingo) {
      let pantalla = "";

      pantalla += `
    
    <table class="table table-info table-bordered border-dark">
    <thead>
      <tr>
        <th scope="col" class='x2'>B</th>
        <th scope="col">I</th>
        <th scope="col">N</th>
        <th scope="col">G</th>
        <th scope="col">O</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">`;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (iteracionM == 0) {
            pantalla += `  <td class='x2'>${bingo[iteracionT][0]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
    </tbody>
  </table>`;
      return pantalla;
    }

    info.innerHTML = mostrarB;
  });

  btnI.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;

    let bingo = matriz(numero);
    let mostrarI = letraI(bingo);

    function letraI(bingo) {
      let pantalla = "";

      pantalla += `
    
      <table class="table table-info table-bordered border-dark">
      <thead>
        <tr>
          <th scope="col">B</th>
          <th scope="col" class='x2'>I</th>
          <th scope="col">N</th>
          <th scope="col">G</th>
          <th scope="col">O</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">

`;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (iteracionM == 1) {
            pantalla += `  <td class='x2'>${bingo[iteracionT][1]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
      </tbody>
    </table>
    `;

      return pantalla;
    }

    info.innerHTML = mostrarI;
  });

  btnN.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;

    let bingo = matriz(numero);
    let mostrarN = letraN(bingo);

    function letraN(bingo) {
      let pantalla = "";

      pantalla += `
    
      <table class="table table-info table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col" class='x2'>N</th>
      <th scope="col">G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">

`;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (iteracionM == 2) {
            pantalla += `  <td class='x2'>${bingo[iteracionT][2]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
      </tbody>
    </table>
    `;

      return pantalla;
    }

    info.innerHTML = mostrarN;
  });

  btnG.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;

    let bingo = matriz(numero);
    let mostrarG = letraG(bingo);

    function letraG(bingo) {
      let pantalla = "";

      pantalla += `
    
      <table class="table table-info table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col">N</th>
      <th scope="col" class='x2'>G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">

`;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (iteracionM == 3) {
            pantalla += `  <td class='x2'>${bingo[iteracionT][3]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
      </tbody>
    </table>
    `;

      return pantalla;
    }

    info.innerHTML = mostrarG;
  });

  btnO.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;
    let bingo = matriz(numero);
    let mostrarO = letraO(bingo);

    function letraO(bingo) {
      let pantalla = "";

      pantalla += `
    
      <table class="table table-info table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col">N</th>
      <th scope="col">G</th>
      <th scope="col" class='x2'>O</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">

`;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (iteracionM == 4) {
            pantalla += `  <td class='x2'>${bingo[iteracionT][4]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
      </tbody>
    </table>
    `;

      return pantalla;
    }

    info.innerHTML = mostrarO;
  });

  btnXG.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;
    let bingo = matriz(numero);
    let mostrarXG = xGrande(bingo);

    function xGrande(bingo) {
      let pantalla = "";

      pantalla += `
      
      <table class="table table-info table-bordered border-dark">
    <thead>
      <tr>
        <th scope="col">B</th>
        <th scope="col">I</th>
        <th scope="col">N</th>
        <th scope="col">G</th>
        <th scope="col">O</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
  
  `;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          if (
            iteracionT == iteracionM ||
            bingo.length - 1 == iteracionT + iteracionM
          ) {
            pantalla += `  <td class='x1'>${bingo[iteracionT][iteracionM]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
        </tbody>
      </table>
      `;

      return pantalla;
    }
    info.innerHTML = mostrarXG;
  });

  btnXP.addEventListener("click", function () {
    let numero = document.getElementById("numero").value;
    let bingo = matriz(numero);
    let mostrarXP = xPeque(bingo);

    function xPeque(bingo) {
      let pantalla = "";

      x2 = [];
      x3 = [];
      x4 = [];
      for (let iteracionM = 0; iteracionM < 3; iteracionM++) {
        x2.push(bingo[iteracionM][iteracionM + 1]);
        x2.push(bingo[iteracionM][3 - iteracionM]);
w
        x3.push(bingo[2 + iteracionM][iteracionM]);
        x3.push(bingo[2 + iteracionM][2 - iteracionM]);

        x4.push(bingo[2 + iteracionM][iteracionM + 2]);
        x4.push(bingo[2 + iteracionM][4 - iteracionM]);
      }
      pantalla += `
      
      <table class="table table-info table-bordered border-dark">
    <thead>
      <tr>
        <th scope="col">B</th>
        <th scope="col">I</th>
        <th scope="col">N</th>
        <th scope="col">G</th>
        <th scope="col">O</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
  
  `;
      for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
        pantalla += `<tr> `;
        for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
          let clase = "";
          if (x2.includes(bingo[iteracionT][iteracionM])) {
            clase = "x2";
          } else if (x3.includes(bingo[iteracionT][iteracionM])) {
            clase = "x3";
          } else if (x4.includes(bingo[iteracionT][iteracionM])) {
            clase = "x4";
          } else {
            clase = "";
          }

          if (clase !== "") {
            pantalla += `  <td class='${clase}'>${bingo[iteracionT][iteracionM]}</td>`;
          } else {
            pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
          }
        }
        pantalla += ` </tr> `;
      }
      pantalla += `
        </tbody>
      </table>
      `;

      return pantalla;
    }
    info.innerHTML = mostrarXP;
  });

});
