Algoritmo B
    Definir op Como Cadena;
    Definir d, s Como Entero;
    Dimension  titulo[100]; 
    Definir nombre Como Cadena;
    Repetir
        Escribir '1. Ingresar'
        Escribir '2. Ver'
        Escribir '3. Salir'
        Leer s
        Según s Hacer
	1:
		Escribir '¿Cuántos libros deseas ingresar?'
		Leer d
		Para i <- 1 Hasta d Con Paso 1 Hacer
			Escribir 'Digite el nombre del libro ', i
			Leer nombre
			Si nombre == titulo[i]   Entonces
				Escribir "El nombre ya ha sido ingresado anteriormente."
				i <- i - 1
				
			Sino
				titulo[i] <- nombre
			FinSi
		FinPara
	2:
		Si d > 0 Entonces
			Para i <- 1 Hasta d Con Paso 1 Hacer
				Escribir titulo[i]
			FinPara
		Sino
			Escribir 'No hay nombres ingresados.'
		FinSi
	3:
		Escribir 'Adiós'
	De Otro Modo:
		Escribir '¡Ups! Opción inválida.'
FinSegún
Hasta Que s == 3
FinAlgoritmo
