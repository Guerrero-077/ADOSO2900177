/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function edad() {
  let dato = document.getElementById("fechaNac").value;
  let dato2 = document.getElementById("fechaNac2").value;
  let dato3 = document.getElementById("fechaNac3").value;

  let fechaNac = new Date(dato);
  let fechaNac2 = new Date(dato2);
  let fechaNac3 = new Date(dato3);

  if (dato && dato2 && dato3) {
    let edad1 = validar(calcular(fechaNac));
    let edad2 = validar(calcular(fechaNac2));
    let edad3 = validar(calcular(fechaNac3));
    let promedio =
      (calcular(fechaNac) + calcular(fechaNac2) + calcular(fechaNac3)) / 3;

    document.getElementById("pantalla").innerHTML = 
    `
      <h1>Edad</h1>
      <p>
        La edad actual de la perimera persona es: ${edad1} <br>
        La edad actual de la segunda persona es: ${edad2}<br>
        La edad actual de la tercera persona es: ${edad3}<br>
        El promedio de las edades es: ${promedio}<br>
      </p>
     `;
  } else {
    document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben estar llenos </strong>`

  }

  return false;
}

function calcular(fechas) {
  let fechaAc = new Date(); //fecha Actual
  let diferencia;
  let edad;

  diferencia = fechaAc - fechas;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

  return edad;
}

function validar(edad) {
  let pantalla = ''

  if (edad >= 18) {
    pantalla = `${edad} Es mayor de edad <br>`;
  } else {
    pantalla = `${edad} años. Es menor de edad <br>`;
  }
  return pantalla
}
