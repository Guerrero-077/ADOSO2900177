/**
 * Ejercicio del bingo con arreglos
 * fecha:
 * Autor: SG
 */

document.addEventListener("DOMContentLoaded", function () {
  // arreglos que se utilizara
  let bingo = [];
  let multiplicaciones = [];

  let iteracionT;
  let iteracionM;
  let contadorM = 0;
  let pantalla = "";
  let resultado;

  for (iteracionT = 0; iteracionT < 5; iteracionT++) {
    multiplicaciones = [];

    for (iteracionM = 0; iteracionM < 5; iteracionM++) {
      contadorM = contadorM + 1;
      resultado = contadorM * 3;
      multiplicaciones.push(resultado);
    }

    bingo.push(multiplicaciones);
  }

  for (iteracionT = 0; iteracionT < 5; iteracionT++) {
    pantalla += `

        
            <tr>
               
                `;

    for (iteracionM = 0; iteracionM < 5; iteracionM++) {
      pantalla += `
                <th>${bingo[iteracionT][iteracionM]}</th>
                
                `;
    }

    pantalla += `
                </tr>
        `;
  }

  

  //Letra B

  for (iteracionT = 0; iteracionT < 5; iteracionT++) {
    pantalla += `

            <tr>
               
                <th>${bingo[iteracionT][0]}</th>
            </tr> `;
  }

  document.getElementById("table").innerHTML = pantalla;
});
