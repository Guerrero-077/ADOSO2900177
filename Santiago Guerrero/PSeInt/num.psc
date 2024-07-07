//Sistema quue genera un número al azar y me dice si ese numero es par o impara, y si es negativo o positivo

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
				Escribir "______________________________________________";
				Si rang>0 Entonces
					Repetir
						operacion <- azar(rang)+1
						si operacion % 2 == 0 Entonces
							Escribir operacion, " su numero es primo";
							Escribir "______________________________________________";
						SiNo
							Escribir operacion, " su número no es primo"
							Escribir "______________________________________________";
						FinSi
						Escribir "si desea seguir con el mismo rago";
						Leer continuar;
						Escribir "______________________________________________";
					Hasta Que continuar == "no" o continuar <> "si"
				SiNo
					Escribir "El rango debe ser mayor que 0";
					Escribir "______________________________________________";
				FinSi
				Escribir "si desea cambiar el rango";
				Escribir "______________________________________________";
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
