/**
 * Sacar el porcentaje de tres notas}
 * Autor: Santiago GM
 * Fecha: 03/04/2024
 */

let notaUno;
let notaDos;
let notaTres;

 function notas(pnotaUno,pnotaDos,pnotaTres){
    
    notaUno = pnotaUno;
    notaDos = pnotaDos;
    notaTres = pnotaTres;



    let promedioUno;
    let promedioDos;
    let promedioTres;
    let suma;
    let msg ="";

    promedioUno = (notaUno * 20)/100
    
    promedioDos = (notaDos*35)/100
   
    promedioTres = (notaTres*45)/100

    suma = promedioUno + promedioDos + promedioTres;

    if(suma > 4.5){
        msg = "La calificación es Superior "+suma;
    }else if(suma <= 4.5 && suma > 3.5){
        msg = "La calificaciom es Buena "+suma;
    }else if(suma >= 3 && suma <= 3.5){
        msg =  "La calificacion es Media "+suma;
    }else {
        msg =  "la calificacion es Mala"+suma;
    }
    

    return `La nota uno es ${notaUno}, que equivale al ${promedioUno}% del examen.\n`+
            `La nota dos es ${notaDos}, que equivale al ${promedioDos}% del examen.\n`+
            `La nota tres es ${notaTres}, que equivale al ${promedioTres}% del examen.`+'\n'+msg;




 }