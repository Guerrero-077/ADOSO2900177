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
let vari = [...new Set(x1)];

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

//Asignale un arreglo a cada letra

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraB.push(bingo[iteracion1][0]);
}
console.log("Letra B " + letraB);

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraI.push(bingo[iteracion1][1]);
}
console.log("Letra I " + letraI);

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraN.push(bingo[iteracion1][2]);
}
console.log("Letra N " + letraN);

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraG.push(bingo[iteracion1][3]);
}
console.log("Letra G " + letraG);

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    letraO.push(bingo[iteracion1][4]);
}
console.log("Letra O " + letraO);



//Sacar la X Grande

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    x1.push(bingo[iteracion1][iteracion1]);
    x1.push(bingo[iteracion1][4 - iteracion1]);
}

function mostrar(arreglop) {

    let x = arreglop
    x.sort(function (a, b) {
        return a - b;
    });

    let newArreglo = new Set(x);
    let result = [...newArreglo];
    return result;

}
mostrar(x1)





// console.log(x1);

//Sacar x pequeña

for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    x2.push(bingo[iteracion1][1 + iteracion1]);
    x2.push(bingo[iteracion1][3 - iteracion1]);
}

x2.sort(function (a, b) {
    return a - b;
});

let xx = new Set(x2);
let result2 = [...xx];
console.log("xMedia " + result2);


