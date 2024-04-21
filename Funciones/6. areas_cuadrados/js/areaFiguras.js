/**
 * Calcular la nota
 * Autor: Santiago GM
 * 02/04/2024
*/

//como parámetro

function areasCuadrado(plado){
    
    let lado;
    let areaCu;       //area Cuadrado
    
    lado = plado;   
    
    areaCu = lado*lado;
    return areaCu;
    
}
function areaRectangulo(pbaseRe,palturaRe){
    
    let baseRe;      //basa rectangulo
    let alturaRe;    //altura rectangulo
    let areaRe;      //area Rectangulo
    baseRe = pbaseRe;
    alturaRe = palturaRe;
    
    areaRe = baseRe * alturaRe;
    return areaRe;
}

function areaTriangulo(pbaseTri,palturaTri){
    
    let baseTri;     //base Triangulo 
    let alturaTri;    //altura Triangulo 
    let areaTri;     //area Triangulo
    baseTri = pbaseTri;
    alturaTri = palturaTri;
    areaTri = (baseTri * alturaTri)/2
    return areaTri;
}



//Como ExpresiÓn

const areasCuadradoExp = function(plado){

        
    let lado;
    let areaCu;       //area Cuadrado
    lado = plado;
    areaCu = lado*lado
    return areaCu;
    
    
}
const areaRectanguloExp = function(pbaseRe,palturaRe){
    
    let baseRe;      //basa rectangulo
    let alturaRe;    //altura rectangulo
    let areaRe;      //area Rectangulo
    baseRe = pbaseRe;
    alturaRe = palturaRe;

    areaRe = baseRe * alturaRe;
    return areaRe;
}

const areaTrianguloExp = function(pbaseTri,palturaTri){

        
    let baseTri;     //base Triangulo 
    let alturaTri;    //altura Triangulo 
    let areaTri;     //area Triangulo

    baseTri = pbaseTri;
    alturaTri = palturaTri;
    areaTri = (baseTri * alturaTri)/2;
    return areaTri;
}