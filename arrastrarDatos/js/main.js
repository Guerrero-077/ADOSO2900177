let arreglo = ["", "", ""];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}



function drop(ev){
    if (arreglo[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
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


