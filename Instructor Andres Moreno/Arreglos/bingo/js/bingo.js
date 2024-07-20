/**
 * Ejercicio del bingo con arreglos
 * fecha:
 * Autor: SG
 */

document.addEventListener("DOMContentLoaded", function () {
  
  //contenedor para mostrar la informacion 

  let info = document.getElementById("mostrar");

  
  
  //botones para generar las x
  let boton = document.getElementById("btnEnviar");
  let botonB = document.getElementById('btnB')
  let botonI = document.getElementById('btnI')
  let botonN = document.getElementById('btnN')
  let botonG = document.getElementById('btnG')
  let botonO = document.getElementById('btnO')
  let botonX = document.getElementById('btnX')
  let botonXx = document.getElementById('btnXx')
  
  //mensaje para la validacion 
  let mensajeError = document.getElementById('mensajeError')
  
  //boton para generar el carton
  
  boton.addEventListener("click", function () {
    //capturamos el dato
    let limite = document.getElementById('numero').value

    if (limite) {
      mensajeError.textContent = "";

      let bingo = matriz(limite); 
      let mostrarB = mostrarBingo(bingo);
      
      botonB.style.display = 'block'
      botonI.style.display = 'block'
      botonN.style.display = 'block'
      botonG.style.display = 'block'
      botonO.style.display = 'block'
      botonX.style.display = 'block'
      botonXx.style.display = 'block'
      
      info.innerHTML = mostrarB;
    } else {
            
      botonB.style.display = 'none'
      botonI.style.display = 'none'
      botonN.style.display = 'none'
      botonG.style.display = 'none'
      botonO.style.display = 'none'
      botonX.style.display = 'none'
      botonXx.style.display = 'none'
      mensajeError.textContent = "Por favor ingrese un número antes de enviar.";
      info.innerHTML = ""; // Limpiar el contenido mostrado
    }
  });

  
  //boton para iluminar la letra B
  
  botonB.addEventListener("click", function () {
    let  limite = numero.value.trim();
    let bingo = matriz(limite); 
    let mostrarB = letraB(bingo)
    info.innerHTML = mostrarB
    
  })
  //boton para iluminar la letra I

  botonI.addEventListener("click", function () {
    let  limite = numero.value.trim();
    let bingo = matriz(limite); 
    let mostrarO = letraI(bingo)
    info.innerHTML = mostrarO
    
  })
  //boton para iluminar la letra N
  
  botonN.addEventListener("click", function () {
    let  limite = numero.value.trim();
    let bingo = matriz(limite); 
    let mostrarN = letraN(bingo)
    info.innerHTML = mostrarN
    
  })
  //boton para iluminar la letra G
  
  botonG.addEventListener("click", function () {
    let  limite = numero.value.trim();
    let bingo = matriz(limite); 
    let mostrarG = letraG(bingo)
    info.innerHTML = mostrarG
    
  })
  //boton para iluminar la letra O
  
  botonO.addEventListener("click", function () {
    let  limite = numero.value.trim();
    let bingo = matriz(limite); 
    let mostrarO = letraO(bingo)
    info.innerHTML = mostrarO
    
  })
  
  //boton para generar la x Grande 

  botonX.addEventListener("click", function () {

    let  limite = numero.value.trim(); 
    let bingo = matriz(limite); 
    let mostrarBX = mostrarX(bingo)
    info.innerHTML = mostrarBX
  })

    //boton para generar la x peque 

    botonXx.addEventListener("click", function () {

      let  limite = numero.value.trim(); 
      let bingo = matriz(limite); 
      let mostrarBXx = mostrarXx(bingo)
      info.innerHTML = mostrarBXx
    })
  
  function matriz(limite) {
    let bingo = [];
    let tablas = [];
    let contadorM = 0;
    let resultado;

    for (let iteracionT = 0; iteracionT < 5; iteracionT++) {
      tablas = [];
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        contadorM++;
        resultado = contadorM * limite;
        tablas.push(resultado);
      }
      bingo.push(tablas);
    }

    return bingo;
  }

  
  function mostrarBingo(bingo) {
    let pantalla = "";

    pantalla += `
    
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
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        pantalla += `  <td>${bingo[iteracionT][iteracionM]}</td>`;
      }
      pantalla += ` </tr> `;
    }
    pantalla += `
      </tbody>
    </table>
    `;

    return pantalla;
  }


  function letraB(bingo) {
    let pantalla = "";

    pantalla += `
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col" class='x2'>B</th>
      <th scope="col">I</th>
      <th scope="col">N</th>
      <th scope="col">G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody>

`;
    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM==0) {
          
          pantalla += `  <td class='x2'>${bingo[iteracionT][0]}</td>`;
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

  function letraI(bingo) {
    let pantalla = "";

    pantalla += `
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col"  class='x2'>I</th>
      <th scope="col">N</th>
      <th scope="col">G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody>

`;
    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM==1) {
          
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

  function letraN(bingo) {
    let pantalla = "";

    pantalla += `
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col"  class='x2'>N</th>
      <th scope="col">G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody>

`;
    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM==2) {
          
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

  function letraG(bingo) {
    let pantalla = "";

    pantalla += `
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">B</th>
      <th scope="col">I</th>
      <th scope="col">N</th>
      <th scope="col"  class='x2'>G</th>
      <th scope="col">O</th>
    </tr>
  </thead>
  <tbody>

`;
    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM==3) {
          
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
  function letraO(bingo) {
    let pantalla = "";

    pantalla += `
    
    <table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th scope="col">B</th>
        <th scope="col">I</th>
        <th scope="col">N</th>
        <th scope="col">G</th>
        <th scope="col"  class='x2'>O</th>
      </tr>
    </thead>
    <tbody>

`;
    for (let iteracionT = 0; iteracionT < bingo.length; iteracionT++) {
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionM==4) {
          
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

  function mostrarX(bingo) {
    let pantalla = "";

    pantalla += `
    
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
      pantalla += `<tr> `;
      for (let iteracionM = 0; iteracionM < 5; iteracionM++) {
        if (iteracionT== iteracionM ||  bingo.length - 1 == iteracionT + iteracionM) {
          
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
  
  function mostrarXx(bingo) {
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


`;

    return pantalla;
  }
});
