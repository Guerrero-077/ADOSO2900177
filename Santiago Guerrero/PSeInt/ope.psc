// por qué ?
// Este programa se creo con el fin de ayudar a gestinoar las ganacias de una persona, ofreciondo diversas funciones como consultar su sueldo, retirar el suelto, ingresar sueldo, y salir
// Para qué ?
// El proposito principal de este programa es permitirle al usuario interactuar mas facilemente con su dinero, de una manera rapiada y eficaz
// cómo ?
// El programa da inicio preguntandole al usuario si desea ingresar al sistema, si escribe que si, se les mostraran las diversas opciones que tiene, las cuales son, consultar su sueldo, retirar sueldo, ingresar sueldo y salir del programa. Si selecciona que desea ingresar sueldo se le solicitar la cantidad la cual desea ingresar y si es mayor a 0 se le sumara al su sueldo actual y se le mostrara el nuevo sueldo, si selecciona la opcion de retirar se valida si la cantidad que desea retirar es mayor a 0 y si e sueldo que desea retirar es menor o igual a el sueldo actual, si cumple con estas condiciones se le restara el retiro de su sueldo y se le mostrara el nuevo sueldo, si elige la opcion de salir el programa terminara
Algoritmo ope
	Definir opciones, sueldo, retiro, ingreso Como Entero
	Definir opcionR Como Cadena
	sueldo <- 1000000
	Repetir
		Escribir 'Desea Ingresar al sistema s = si / n = no'
		Leer opcionR
		Si opcionR=='s' Entonces
			Repetir
				Escribir 'El programa ofrece las siguientes funciones: '
				Escribir '___________________________________________'
				Escribir '1. Consultar el sueldo'
				Escribir '___________________________________________'
				Escribir '2. Retirar sueldo'
				Escribir '___________________________________________'
				Escribir '3. Rngresar sueldo'
				Escribir '___________________________________________'
				Escribir '4.Salir'
				Escribir '___________________________________________'
				Leer opciones
				Según opciones Hacer
					1:
						Escribir '___________________________________________'
						Escribir 'Su sueldo es: $', sueldo
						Escribir '___________________________________________'
					2:
						Repetir
							Escribir 'Digite la cantidad que desea retirar: '
							Leer retiro
							Si retiro<=sueldo Y retiro>0 Entonces
								sueldo <- sueldo-retiro
								Escribir '___________________________________________'
								Escribir 'Retiro Exitoso!!'
								Escribir 'Su nuevo sueldo es: ', sueldo
								Escribir '___________________________________________'
							SiNo
								Escribir 'Sueldo insufiente'
							FinSi
							Escribir 'Desea retirar de nuevo s == si / n == no'
							Leer opcionR
						Hasta Que opcionR=='n'
					3:
						Repetir
							Escribir 'Digite la cantidad que desea ingresar: '
							Leer ingreso
							Si ingreso>0 Entonces
								sueldo <- sueldo+ingreso
								Escribir '___________________________________________'
								Escribir 'Sueldo ingresado con exito!!'
								Escribir 'Du nuevo sueldo es: ', sueldo
								Escribir '___________________________________________'
							SiNo
								Escribir 'El ingreso debe ser mayor que 0'
							FinSi
							Escribir 'Desea ingresar de nuevo s == si / n == no'
							Leer opcionR
						Hasta Que opcionR=='n'
					4:
						Escribir 'Hasta luego'
					De Otro Modo:
						Escribir 'Opcion no valida'
				FinSegún
			Hasta Que opciones==4
		FinSi
	Hasta Que opcionR=='n' O opciones==4
FinAlgoritmo
