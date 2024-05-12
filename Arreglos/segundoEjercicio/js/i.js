/**
 * Ejercicio con arreglos: Bingo
 * 08/05/24
 * Autor: SG
 */

let bingo = [];
let letraB = [];
let letraI = [];
let letraN = [];
let letraG = [];
let letraO = [];

//------------------

let iteracion1;
let iteracion2;
let numPar = 0;
let numImpar = 0;
let contador = 0;
let tabla;

//Creamos la matriz

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let interno = [];
    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        contador = contador + 1;
        tabla = contador * 3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

//------------------------------------------------------------------------------

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (bingo[iteracion1][iteracion2] % 2 == 0) {
        numPar = numPar + 1;
    } else {
        numImpar = numImpar + 1;
    }
    }
}

console.log("Tiene " + numPar + " Pares");
console.log("Tiene " + numImpar + " Impares");

console.log("\n");
//-----------------------------------------------------------------------------------
//Letra B

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraB.push(bingo[iteracion1][0]);
}
console.log("Letra B: " + letraB);

//Letra I

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraI.push(bingo[iteracion1][1]);
}
console.log("Letra I: " + letraI);

//Letra N

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraN.push(bingo[iteracion1][2]);
}
console.log("Letra N: " + letraN);

//Letra G

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraG.push(bingo[iteracion1][3]);
}
console.log("Letra G: " + letraG);

//Letra O

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraO.push(bingo[iteracion1][4]);
}
console.log("Letra O: " + letraO);

//-----------------------------------------------------------

//Recorrer e arreglo en forma de esquina a esquina y mostrar los datos

let x = [];

for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {

    x.push(bingo[iteracion1][iteracion1])
    

}

for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    x.push(bingo[iteracion2][4 - iteracion2]);
    
}
console.log(x)  