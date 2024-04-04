/**
 * Area de tres figutas 
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let ladoUno;
let ladoDos;
let ladoTres;

//Como paramétro
function areas(pladoUno,pladoDos,pladoTres){
    ladoUno = pladoUno;
    ladoDos = pladoDos;
    ladoTres = pladoTres;

    let areaUno;
    let areaDos;
    let areaTres;

    areaUno = ladoUno * ladoUno;
    areaDos = ladoDos * ladoDos;
    areaTres = ladoTres * ladoTres;



    if (areaUno > areaDos && areaUno > areaTres){
        return `El area del primer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`
    }else if(areaDos > areaUno && areaDos > areaTres){
        
        return `El area del segundo cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`
        
    }else{
        return `El area del tercer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`

    }

}

//Como Expresión 
const areasExp = function (pladoUno,pladoDos,pladoTres){
    ladoUno = pladoUno;
    ladoDos = pladoDos;
    ladoTres = pladoTres;

    let areaUno;
    let areaDos;
    let areaTres;

    areaUno = ladoUno * ladoUno;
    areaDos = ladoDos * ladoDos;
    areaTres = ladoTres * ladoTres;



    if (areaUno > areaDos && areaUno > areaTres){
        return `El area del primer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`
    }else if(areaDos > areaUno && areaDos > areaTres){
        
        return `El area del segundo cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`
        
    }else{
        return `El area del tercer cuadrado es mayor.\nEl area del primer cuadrado es ${areaUno},\nEl area del segundo cuadrado es ${areaDos},\nEl area del tercer cuadrado es ${areaTres}`

    }

}