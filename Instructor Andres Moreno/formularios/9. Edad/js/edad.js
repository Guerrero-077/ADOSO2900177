/* 
fecha 17/06/2024
funcion edad persona
autor: Santiago GM
*/

function edad() {
    let fecha = document.getElementById("fechaNac").value;

    if (fecha) {
        
        let fechaAc = new Date();  //fecha Actual
        let fechaNac = new Date(fecha);
        let diferencia;
        let edad;
    
        diferencia = fechaAc - fechaNac;
        edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    
        document.getElementById('pantalla').innerHTML = `<h5>La edad actual de la persona es: ${edad}</h5>`
    } else {
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`
        
    }


    return false
}