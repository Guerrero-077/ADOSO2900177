/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

let par = 0;
let impar = 0;

function tablasM() {
  let tablas = document.getElementById("tablas").value;
  let limite = document.getElementById("limite").value;

  let contador = 0;
  let resultado;
  let msg = "";

  for (tablas = tablas; limite >= tablas; tablas++) {
    msg += `<br><h5>Tabla del ${tablas}</h5>`;

    for (contador = 1; 5 >= contador; contador++) {
      resultado = tablas * contador;

      msg += `${tablas} x ${contador} = ${resultado}`;
      msg += validar(resultado);

    }
  }

  document.getElementById("pantalla").innerHTML = `

    <h3>Tablas de multiplicar:</h3>
    <p>
    ${msg}
    <br>
      Número de pares: ${par}<br>
      Número de impares: ${impar}
    </p>
  
  `;
  par = 0;
  impar = 0;

  return false;
}

function validar(resultado){
  
    if (resultado % 2 == 0){
      par ++
      return " Buzz <br>";
    }else{
      impar++
      return " Bass <br>";
    }
  }