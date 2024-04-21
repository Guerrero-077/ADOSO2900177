Algoritmo num
	Definir ingreso,continuar,cambiar Como Cadena
	Definir rang, operacion Como Entero
	ingreso <- ''
	Repetir
		Escribir "Desea ingresar al sistema"
		Leer ingreso
		Si ingreso=='si' Entonces
			Repetir
				
				Escribir "Ingrese el rango para su número al azar: ";
				Leer rang;
				Si rang>0 Entonces
					Repetir
						operacion <- azar(rang)+1
						Escribir operacion;
						Escribir "si desea seguir con el mismo rago";
						Leer continuar;
					Hasta Que continuar == "no" o continuar <> "si"
				SiNo
					Escribir "El rango debe ser mayor que 0"
				FinSi
				Escribir "si desea cambiar el rango";
				Leer cambiar
			Hasta Que cambiar == "no" o cambiar <> "si"
		SiNo
			Si ingreso=='no' Entonces
				Escribir "Adios";
			SiNo
				Escribir "Opcion invalida";
			FinSi
		FinSi
	Hasta Que ingreso == "no" o cambiar == "no"
	Escribir "fin"
FinAlgoritmo
