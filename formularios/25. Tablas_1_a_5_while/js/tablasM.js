/**
 * Tablas del 1 al 5 que me idique que dato es par e impar
 * Autor: Santiago GM
 * 03/04/2024
 */
let par = 0;
let impar = 0;

function tablasM() {
  let tablas = parseInt(document.getElementById("tablas").value);
  let limite = parseInt(document.getElementById("limite").value);
  let contador = 0;
  let multiplicacion;
  let msg = "";

  while (tablas <= limite) {
    msg += `<br><h5>Tabla del ${tablas}</h5>`;
    contador = 1;
    while (contador <= 5) {
      multiplicacion = tablas * contador;
      msg += `${tablas} x ${contador} = ${multiplicacion}`;
      msg += validar(multiplicacion);
      contador++;
    }
    tablas++;
  }
  document.getElementById("pantalla").innerHTML = `

    <h3>Tablas de multiplicar:</h3>
    ${msg}
    <br>
    <p>
      Número de pares: ${par}<br>
      Número de impares: ${impar}
    </p>
  
  `;
  par = 0;
  impar = 0;

  return false;
}

function validar(resultado) {
  if (resultado % 2 == 0) {
    par++;
    return " Buzz <br>";
  } else {
    impar++;
    return " Bass <br>";
  }
}
