/* 
fecha 17/06/2024
funcion mayor igual area de tres cuadrados
autor: Santiago GM
*/

function calcularAreas() {

    let numUno = parseFloat(document.getElementById("NumUno").value)
    let numDos = parseFloat(document.getElementById("NumDos").value)
    let numTres = parseFloat(document.getElementById("NumTres").value)
    let pantalla = ""

    if (numUno && numDos && numTres) {
      
      
          let areaUno = areas(numUno);
          let areaDos = areas(numDos);
          let areaTres = areas(numTres);
          
          pantalla = validar(areaUno,areaDos,areaTres)
          document.getElementById("pantalla").innerHTML =  
          `
          <p>
              El área del primer cuadrado es: ${areaUno} <br>
              El área del segundo cuadrado es: ${areaDos} <br>
              El área del tercer cuadrado  es: ${areaTres}<br>
              ${pantalla}
          </p> 
          `
    }else{
      document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben estar llenos </strong>`
      
    }
    return false
}

function areas(lado) {
    let area = lado * lado;
    return area;
  }

function validar(areaUno, areaDos, areaTres) {

    let pantalla
    if (areaUno == areaDos && areaUno == areaTres && areaDos == areaTres) {
      pantalla =  "Las áreas son iguales";
    } else if (areaUno > areaDos && areaUno > areaTres) {
      pantalla =  "El área del primer cuadrado es mayor " + areaUno;
    } else if (areaDos > areaUno && areaDos > areaTres) {
      pantalla =  "El área del segundo cuadrado es mayor " + areaDos;
    } else {
      pantalla =  "El área del tercer cuadrado es mayor " + areaTres;
    }
    return pantalla
  }