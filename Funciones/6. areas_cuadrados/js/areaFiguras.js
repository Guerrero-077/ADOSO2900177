/**
 * Calcular la nota
 * Autor: Santiago GM
 * 02/04/2024
*/

//como parametro

let lado;
let baseRe;      //basa rectangulo
let alturaRe;    //altura rectangulo
let baseTri;     //base Triangulo 
let alturaTri;    //altura Triangulo 

function areasCuadrado(plado){

    let areaCu;       //area Cuadrado
    lado = plado;

    areaCu = lado*lado
    return "El area del cuadrado es: "+areaCu+".\n"
    
}
function areaRectandulo(pbaseRe,palturaRe){
    
    let areaRe;      //area Rectangulo
    baseRe = pbaseRe;
    alturaRe = palturaRe;

    areaRe = baseRe * alturaRe;
    return "EL area del rectangulo es: "+areaRe+".\n"
}

function areaTriangulo(pbaseTri,palturaTri){
    let areaTri;     //area Triangulo
    baseTri = pbaseTri;
    alturaTri = palturaTri;
    areaTri = (baseTri * alturaTri)/2
    return "El area del triangulo es: "+areaTri;
}



//Como expresion

const areasCuadradoExp = function(plado){

    let areaCu;       //area Cuadrado
    lado = plado;
    areaCu = lado*lado
    return "El area del cuadrado es: "+areaCu+".\n"
    
    
}
const areaRectanduloExp = function(pbaseRe,palturaRe){
    
    let areaRe;      //area Rectangulo
    baseRe = pbaseRe;
    alturaRe = palturaRe;

    areaRe = baseRe * alturaRe;
    return "EL area del rectangulo es: "+areaRe+".\n"
}

const areaTrianguloExp = function(pbaseTri,palturaTri){
    let areaTri;     //area Triangulo

    baseTri = pbaseTri;
    alturaTri = palturaTri;
    areaTri = (baseTri * alturaTri)/2
    return "El area del triangulo es: "+areaTri;
}