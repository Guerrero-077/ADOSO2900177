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

function areas(plado,pbaseRe,palturaRe,pbaseTri,palturaTri){

    let areaCu;       //area Cuadrado
    let areaTri;     //area Triangulo
    let areaRe;      //area Rectangulo

    lado = plado;
    baseRe = pbaseRe;
    alturaRe = palturaRe;
    baseTri = pbaseTri;
    alturaTri = palturaTri;

    areaCu = lado*lado
    areaRe = baseRe * alturaRe;
    areaTri = (baseTri * alturaTri)/2
    
    return "El area del cuadrado es: "+areaCu+".\n"+
            "EL area del rectangulo es: "+areaRe+".\n"+
            " y el area del triangulo es: "+areaTri;
    
}



//Como expresion

const areasExp = function (plado,pbaseRe,palturaRe,pbaseTri,palturaTri){

    let areaCu;       //area Cuadrado
    let areaTri;     //area Triangulo
    let areaRe;      //area Rectangulo

    lado = plado;
    baseRe = pbaseRe;
    alturaRe = palturaRe;
    baseTri = pbaseTri;
    alturaTri = palturaTri;

    areaCu = lado*lado
    areaRe = baseRe * alturaRe;
    areaTri = (baseTri * alturaTri)/2
    
    return "El area con Expresión del cuadrado es: "+areaCu+".\n"+
            "EL area con Expresión del rectangulo es: "+areaRe+".\n"+
            " y el area con Expresión del triangulo es: "+areaTri;
    
}