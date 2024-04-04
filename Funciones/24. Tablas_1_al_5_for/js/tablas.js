

let limite;

// Con paramétros

function tablas(plimite){

    limite = plimite;
    
    let tabla;
    let contador;
    let par = 0;
    let impar = 0;
    let resultado;
    let msg = "";

    for(tabla = 1; limite >= tabla; tabla++){

        for(contador=1; limite >= contador; contador ++ ){

            resultado = tabla * contador;

            
             msg += `\n ${tabla} x ${contador} = ${resultado}`;

           if(resultado % 2==0){
             par = par + 1;
              msg += " Buzz\n"
           }else{
            impar = impar + 1; 
             msg +=  " Bass\n"
           }
        }
        msg +="\n";
    }
    return msg + "total de pares: "+par+"\n"+
                "total de impares "+impar;

}

//Como Expresión

const  tablasExp =function(plimite){

  limite = plimite;
  
  let tabla;
  let contador;
  let par = 0;
  let impar = 0;
  let resultado;
  let msg = "";

  for(tabla = 1; limite >= tabla; tabla++){

      for(contador=1; limite >= contador; contador ++ ){

          resultado = tabla * contador;

           msg += `\n ${tabla} x ${contador} = ${resultado}`;

         if(resultado % 2==0){
           par = par + 1;
            msg += " Buzz\n"
         }else{
          impar = impar + 1; 
           msg +=  " Bass\n"
         }
      }
      msg +="\n";
  }
  return msg + "total de pares: "+par+"\n"+
              "total de impares "+impar;

}