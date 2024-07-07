/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function datos() {
    let opcion = document.getElementById("opcion").value;
    let campos = document.getElementById("campos");

    if (opcion == "cuadrado") {
        campos.innerHTML = `
        <div class="row justify-content-center">

            <div class="col-md-8 user-box">
                <h1>cuadrado</h1>
                <label for="ladoC" class="form-label mb-0">Lado del cuadrador</label>
                <input type="number" class="form-control mx-2" id="ladoC" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
              
        </div>`;
    } else if (opcion == "triangulo") {
        campos.innerHTML = `
        <div class="row justify-content-center">

            <div class="col-md-8 user-box">
                <h1>Triángulo</h1>
                <label for="alturaT" class="form-label mb-0">Altura del triángulo </label>
                <input type="number" class="form-control mx-2" id="alturaT" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>

        <div class="col-md-8 user-box">
                <label for="baseT" class="form-label mb-0">Base del triángulo </label>
                <input type="number" class="form-control mx-2" id="baseT" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
        
        </div>`;

    } else {
        campos.innerHTML = `
        <div class="row justify-content-center">

            <div class="col-md-8 user-box">
                <h1>Rectangulo</h1>
                <label for="alturaR" class="form-label mb-0">Largo del Rectángulo</label>
                <input type="number" class="form-control mx-2" id="alturaR" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-8 user-box">
                <label for="baseR" class="form-label mb-0">Ancho del Rectángulo</label>
                <input type="number" class="form-control mx-2" id="baseR" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>

        </div>`;
    }

    return false;
}



function areasCuadrado(lado){
    let areaCu; //area Cuadrado
    
    areaCu = lado*lado;
    return areaCu;
    
}

function areaRectangulo(baseRe,alturaRe){
    
    let areaRe;      //area Rectangulo
    
    
    areaRe = baseRe * alturaRe;
    return areaRe;
}

function areaTriangulo(baseTri, alturaTri){
    
    let areaTri;     //area Triangulo
    
    areaTri = (baseTri * alturaTri)/2
    return areaTri;
}

function calcularArea() {
    var opcion = document.getElementById("opcion").value;
    var resultado = document.getElementById("pantalla");
    let  area;

    if (opcion === "cuadrado") {
      var lado = parseFloat(document.getElementById("ladoC").value);
      area = areasCuadrado(lado)
    } else if (opcion === "rectangulo") {
      var base = parseFloat(document.getElementById("baseR").value);
      var altura = parseFloat(document.getElementById("alturaR").value);
      area = areaRectangulo(base,altura)
    } else if (opcion === "triangulo") {
      var baseTriangulo = parseFloat(document.getElementById("baseT").value);
      var alturaTriangulo = parseFloat(document.getElementById("alturaT").value);
      area = areaTriangulo(baseTriangulo,alturaTriangulo)
    }

    resultado.innerHTML = 
    `
        <h3>El área de ${opcion} es: ${area} </h3>
    ` 

    return false
}