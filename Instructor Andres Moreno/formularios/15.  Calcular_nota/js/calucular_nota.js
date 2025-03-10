/* 
fecha 17/06/2024
funcion calcular promedio 
autor: Santiago GM
*/

function calculaPorcentaje(){
    
    let notaUno = parseFloat(document.getElementById("NumUno").value)
    let notaDos = parseFloat(document.getElementById("NumDos").value) 
    let notaTres = parseFloat(document.getElementById("NumTres").value) 

    
    if (notaUno && notaDos && notaTres) {


        let suma    
        suma = (notaUno * 0.2) + (notaDos * 0.35) + (notaTres * 0.45)
        
        document.getElementById("pantalla").innerHTML = 
        `
            <strong> Su primera nota es: ${notaUno} que equivale al 0.2%</strong><br>
            <strong> Su segunda nota es: ${notaDos} que equivale al 0.35%</strong><br>
            <strong> Su tercera nota es: ${notaTres} que equivale al 0.45%</strong><br>
            <strong>${validar(suma)} </strong>
        `
        

    }else{
        document.getElementById("pantalla").innerHTML = `<strong>Todos los campos deben esta llenos </strong>`

    }


    return false
}

function validar(suma) {
    let pantalla = ''


    if (suma > 4.5) {
      pantalla = "La calificación es Superior " + suma;
    } else if (suma <= 4.5 && suma > 3.5) {
      pantalla = "La calificaciom es Buena " + suma;
    } else if (suma >= 3 && suma <= 3.5) {
      pantalla ="La calificacion es Media " + suma;
    } else {
      pantalla ="la calificacion es Mala" + suma;
    }

    return pantalla
  }