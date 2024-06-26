/* 
fecha 17/06/2024
funcion saludo 
autor: Santiago GM
*/

function areas() {

    let lado = parseFloat(document.getElementById("txtCuadrado").value)

    let baseRe = parseFloat(document.getElementById("txtBaseR").value)      //basa rectangulo
    let alturaRe = parseFloat(document.getElementById("txtAlturaR").value)    //altura rectangulo

    let baseTri = parseFloat(document.getElementById("txtBaseT").value)     //base Triangulo 
    let alturaTri = parseFloat(document.getElementById("txtAlturaT").value)    //altura Triangulo 

    let areaCu;       //area Cuadrado
    let areaRe;      //area Rectangulo
    let areaTri;     //area Triangulo

    areaCu = lado * lado;
    areaRe = baseRe * alturaRe;
    areaTri = (baseTri * alturaTri)/2

    
    rCuadrado = `area Cuadrado: ${areaCu} <br>` 
    rRectangulo = `area Rectangulo: ${areaRe} <br>` 
    rTriangulo = `area Triangulo: ${areaTri}` 

    document.getElementById("saludo").innerHTML = rCuadrado + rRectangulo + rTriangulo

    return false
}