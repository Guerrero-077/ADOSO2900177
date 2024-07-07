// arreglo para saber que div estan ocupados 

let arreglo = ["", "", ""];

// funcion que evuta que se abra como enlace al soltar un elemento

function allowDrop(ev) {
    ev.preventDefault();
}

// que sucede cuando se agarra un elemento 

function drag(ev) {

    // metodo que establece el tipo de datos y el valor de dato arrastrado
    // en este caso el dato es texto y el valor es el id del elemento arrastrado
    ev.dataTransfer.setData("text", ev.target.id);
}



function drop(ev){
    // mediante ev.target.id tomo el nombre del id del div que puede ser 0 o 1 o 2
    // si el arreglo en diah posicion esta vacio, significa que no tiene nada, osea puedo soltar alli. Caso contrario ya tiene un elemento

    if (arreglo[parseInt(ev.target.id)] == "") {
        // obtengo los datos arrastrados con el elemento dataTransfer.getData() Este metodo devolvera cualquire dato que se halla establecido en elv mismo tipo en metodo setData(). 
        var data = ev.dataTransfer.getData("text");
        // agrego al arreglo el nombre del id 
        arreglo[parseInt(ev.target.id)] = data;
        // agregue el elemento arrastrado al elemento soltado 
        ev.target.appendChild(document.getElementById(data));
    }

    if (arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "") {

        if (arreglo[0] == "uno" && arreglo[1] == "dos" && arreglo[2] == "tres") {
            document.querySelector('h1').innerHTML = 'Genial!!'
        }else{

            document.querySelector('h1').innerHTML = 'Upsl!!'
        }
        
    }
}


