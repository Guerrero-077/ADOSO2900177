/**
 * Ejercicio con arreglos: Bingo
 * 08/05/24
 * Autor: SG
 */

//Arreglos
let bingo = [];
let letraB = [];
let letraI = [];
let letraN = [];
let letraG = [];
let letraO = [];
let x1 = [];
let x2 = [];
let x3 = [];
let x4 = [];

let iteracion1;
let iteracion2;
let contador = 0;
let tabla;
let pares = 0;
let impares = 0;

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let interno = [];
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    contador = contador + 1;
    tabla = contador * 3;
    interno.push(tabla);
    }

    bingo.push(interno);
}

console.log(bingo);
console.log("");


//Asignale un arreglo a cada letra

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraB.push(bingo[iteracion1][0]);
    letraI.push(bingo[iteracion1][1]);
    letraN.push(bingo[iteracion1][2]);
    letraG.push(bingo[iteracion1][3]);
    letraO.push(bingo[iteracion1][4]);
}

console.log("Letra B " + letraB);
console.log("Letra I " + letraI);
console.log("Letra N " + letraN);
console.log("Letra G " + letraG);
console.log("Letra O " + letraO);


console.log("");
//Sacar la X Grande

function mostrar(xp) {
    let org = xp;

    let imp = new Set(org);
    let result = [...imp];
    return result;
}

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    x1.push(bingo[iteracion1][iteracion1]);
    x1.push(bingo[iteracion1][4 - iteracion1]);
}

x1.sort(function (a, b) {
    return a - b;
});

console.log("xGrande " + mostrar(x1));

for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    
    //Sacar x pequeña
    x2.push(bingo[iteracion1][1 + iteracion1]);
    x2.push(bingo[iteracion1][3 - iteracion1]);


    //Sacar x Mediana
    x3.push(bingo[iteracion1 + 2][iteracion1]);
    x3.push(bingo[iteracion1 + 2][2 - iteracion1]);

    //Sacar x Mini
    x4.push(bingo[2 + iteracion1][2 + iteracion1]);
    x4.push(bingo[2 + iteracion1][4 - iteracion1]);
}

x2.sort(function (a, b) {
    return a - b;
});

// x2.sort((a,b) => a - b);

x3.sort(function (a, b) {
    return a - b;
});

x4.sort(function (a, b) {
    return a - b;
});

console.log('xMedia '+mostrar(x2));

console.log("xChica " + mostrar(x3));

console.log("xMini " + mostrar(x4));

console.log("");

//Sacar los numeros pares e impares

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let interno = [];
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (bingo[iteracion1][iteracion2] % 2 == 0) {
        pares = pares + 1;
    } else {
        impares = impares + 1;
    }
    } 
}

console.log("Tiene " + pares + " pares");
console.log("Tiene " + impares + " impares");