Algoritmo tienda
	Definir  producto,pregunta,i Como Caracter;
	Definir descuentoAsignado,resultadoD  Como Entero
	Definir  precio, cantidad, precioBruto,descuento Como Real;
	
	Repetir
		Escribir "Digite el nombre del producto";
		Leer  producto;
		Escribir  "Digite el precio del producto";
		Leer  precio;
		Escribir "Digite la cantidad del producto";
		Leer  cantidad;
		
		precioBruto = precio * cantidad;
		
		Escribir "Desea colocarle un desciento al producto si/no"
		Leer  pregunta;
		
		si pregunta == "si" Entonces
			Escribir "Digite el descuento para el prodcto";
			Leer  descuentoAsignado;
			descuento = descuentoAsignado 
		SiNo
			descuento = 0;
		FinSi
		si cantidad > 5 Entonces
			descuento = descuentoAsignado/100
			resultadoD = precioBruto * descuento;
		SiNo
			descuento = 0;
		FinSi
		
		valorTotal= precioBruto - resultadoD;
		
		Escribir "El valor del producto es: ", precioBruto;
		Escribir  "---------------------------------------------------------------";
		Escribir "El porcentaje de descueto sera de: ",descuento,"%";
		Escribir  "---------------------------------------------------------------";
		Escribir "El descuento que se le hara sera de: ",resultadoD;
		Escribir  "---------------------------------------------------------------";
		Escribir "El valor total del producto es: ",valorTotal;
		Escribir  "---------------------------------------------------------------";
		Escribir "Desea ingresar otro producto SI/NO";
		Leer  i;
	Hasta Que i == "no"

		

	
	
FinAlgoritmo
