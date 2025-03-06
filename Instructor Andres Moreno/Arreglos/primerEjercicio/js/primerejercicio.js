/**
 * Primer ejercicio de arreglos
 * santiago GM
 * 29/04/2024
 */

let numeros = [];
let frutas = [];
let contador;
let contar;

numeros = [1, 2, 3, 4, 5];
frutas = ["Manzana", " Pera", " Uva", " Mora"];

console.log("Todos los datos del arrglo de números: " + numeros);
console.log("Todos los datos del arrglo de frutas: " + frutas);
console.log("------------------------------------------------");

console.log("El primer dato del arreglo de números: " + numeros[0]);
console.log("El primer dato del arreglo de frutas: " + frutas[0]);
console.log("------------------------------------------------");


let longitudN;
let longitudF;

longitudN = numeros.length;
longitudF = frutas.length;

for (contador = 0; contador < longitudN; contador++) {
    console.log('La posicion: ' + contador + ' ' + numeros[contador]);
}
console.log("------------------------------------------------");


let matriz;

matriz = [
    [1, 2, 3],
    ['Hola', 4, 5, 6],
    [7, 8, 9]
];

console.log(matriz);

let longitudM;
longitudM = matriz.length;
console.log("------------------------------------------------");




for (contador = 0; contador < longitudM; contador++) {
    for (contar = 0; contar < matriz[contador].length; contar++) {
        console.log(matriz[contador][contar]);
    }
}
console.log("------------------------------------------------");

let arreglos = [];
let numerosDatos;
let mostrar = "";

arreglos = [2, 4, 6, 8, 10]

numerosDatos = arreglos.length
console.log("Mostrar los valores iniciales del arreglo: " + numerosDatos);

arreglos.push(12)
arreglos.push(14)
arreglos.push(16)

numerosDatos = arreglos.length
console.log("Mostrar los valores finales del arreglos: " + numerosDatos);

for (i = 0; i < numerosDatos; i++) {
    mostrar += "Los arreglos: " + arreglos[i] + "\n";

}
alert(mostrar)
