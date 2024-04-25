// por qué ?
// Este programa de biblioteca surgue de la necesidad de gestionar la informacion de los libros de una biblioteca, porporcionando diversas herramientas como lo son ingresar libros, ver los liibros registrados y salir del programa
// Para qué ? 
// El proposito de este programa es facilitar el registro de los libros con los que cuenta la biblioteca,permitiendole al encargado ingresar libros de manera rapida y dandole un mayor orden para que los usuarios puedan ver cuales son los libros que tiene la biblioteca
// cómo ?
// El programa da inicio preguntandole al usuario si desea ingresar al sistema, si escribe que si, se le mostrara un menu el cual le indica que puede registrara un libro, ver los lisbros o salir del programa, dependiendo de la opcion que escoja el usuario se realizan diversas acciones, por ejemplo si el usuairo selecciona que desea ingresar un libro se le pediran los datos correspondientes como el nombre, el autor y el año, estos datos se alacenan en una matriz lamada libros la cual nos servira para cuando el usurio seleecione la opcion de ver los libros, la cual le mostrara los datos almacenados en la matris de libros, y si el usuario elige la opcion de salir se saldra del programa 
Algoritmo Biblioteca
	Definir ingreso, pr, libros Como Cadena
	Definir i, i2, re, d, op Como Entero // pr = pregunta
	Dimensionar libros(100,4) // i, i2 pocisión del vector, re = repeticion, d = datos 
	Repetir
		Escribir 'Desea ingresar al sistema si / no'
		Leer ingreso
		Limpiar Pantalla
		Mientras ingreso=='si' Hacer
			Escribir 'El sistema le ofrece las siguientes opciones: '
			Escribir '1. Ingresar un libro: '
			Escribir '2. ver libros '
			Escribir '3. salir'
			Leer op
			Escribir '------------------------------------- '
			Según op Hacer
				1:
					re <- 1
					Mientras re=1 Hacer
						Escribir 'Cuantos libros desea ingresar: '
						Leer d
						Escribir '------------------------------------- '
						i <- 1
						Mientras i<=d Hacer
							Escribir 'Ingrese los datos para el ', i, ' libro'
							Escribir '------------------------------------- '
							Escribir 'Ingrese el nombre del libro: '
							Leer libros[i,1]
							Escribir 'Ingrese el autor del libro '
							Leer libros[i,2]
							Escribir 'Ingrese el año del libro '
							Leer libros[i,3]
							i <- i+1
						FinMientras
						Escribir 'Libros reistrados con exito '
						re <- 0
					FinMientras
				2:
					Escribir ' '
					Escribir 'Lista de libros: '
					i2 <- 1
					Mientras i2<=d Hacer
						Escribir 'El nombre del libro ', i2, ' es: ', libros[i2,1]
						Escribir 'El autor del libro ', i2, ' es: ', libros[i2,2]
						Escribir 'El año del libro ', i2, ' es: ', libros[i2,3]
						Escribir '------------------------------------- '
						i2 <- i2+1
					FinMientras
				3:
					Escribir 'Adios'
					ingreso <- 'no'
				De Otro Modo:
					Escribir 'Invalido'
			FinSegún
		FinMientras
	Hasta Que ingreso<>'si'
FinAlgoritmo
