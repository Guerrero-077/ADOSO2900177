/**
 * contar de 1 hasta 10 con arreglos 
 * autor: SG
 * feha 08/07/24
*/

let array = [];
let iteracion
let mostrarLista = '' 
let numero

array = [1,2,3,4,5,6,7,8,9,10]

for (iteracion = 0; iteracion < array.length; iteracion++) {

    numero = iteracion + 1
    mostrarLista += '<option>' + array[iteracion] + '</option>'; 
}   

document.getElementById("lista-uno").innerHTML = mostrarLista


// Otra forma de generar la lista 1-10

array = []; //volvemos el arreglo vacio 

for (iteracion = 0; iteracion < 10; iteracion++) {
    numero = iteracion + 1
    array.push(numero);
}

mostrarLista = '' //volvemos la variable a vacia para que no se acumulen los datos

for (let iteracion = 0; iteracion < array.length; iteracion++) {

    numero = iteracion + 1
    mostrarLista += '<option>' + array[iteracion] + '</option>'; 
}   

document.getElementById("lista-dos").innerHTML = mostrarLista


// factorial de un numero, mostrado en un tabla

let numeroFactorial = 5
let factorial = 1

array = [];

for (iteracion = 1; iteracion <= numeroFactorial; iteracion++) {

    factorial *= iteracion
    array.push(factorial);  
}


mostrarLista = ''

for (iteracion = 0; iteracion < array.length; iteracion++) {

    numero = iteracion + 1
    mostrarLista += '<tr><th scope="row">!' + numero + '</th><th scope="row">' + array[iteracion] + '</th></tr> '
    // mostrarLista += '<tr><th scope="row">' + array[iteracion] + '</th></tr> '
}   

document.getElementById("lista-tres").innerHTML = mostrarLista
